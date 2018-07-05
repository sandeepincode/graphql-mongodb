
import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  userAgent: {
    type: String,
    trim: true,
  },
  ip: {
    type: String,
    trim: true,
  },
  active: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export const Session = mongoose.model('Session', sessionSchema);
