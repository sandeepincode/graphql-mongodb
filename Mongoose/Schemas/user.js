
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a email format',
    ],
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  secondName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    match: [
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Your password must have at least 8 characters, one uppercase letter and one number',
    ],
  },
  registered: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', (next) => {
  let user = this;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      return next();
    });
  });
});

export const User = mongoose.model('User', UserSchema);
