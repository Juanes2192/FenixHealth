import bcrypt from 'bcryptjs';
import User from '../models/User.model.js';

export const createUser = async ({ name, email, password, role }) => {

  const exists = await User.findOne({ email });

  if (exists) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  return user;
};