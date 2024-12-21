import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  faculty: { type: String },
  speciality: { type: String },
  grade: { type: String },
  course: { type: String },
  budget: { type: Boolean },
  // votedSubjects: {[type: String]},
});
const User = mongoose.model('User', userSchema);

export default User;
