import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  superuser: { type: Boolean, default: false },
});
const User = mongoose.model('User', userSchema);

export default User;
