
import mongoose from 'mongoose';
const sessionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      `Please enter a email format`
    ]
  },
  userAgent: {
    type: String,
    trim: true
  },
  ip: {
    type: String,
    trim: true
  }
  created: {
    type: Date,
    default: Date.now
  }
});

export const Session = mongoose.model('Session', sessionSchema);
