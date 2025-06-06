import bcrypt from 'bcryptjs';
import { User } from '../models/user';
import { CreateUserInput } from '../types';

export async function createUserService(data: CreateUserInput) {
  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(data.password, 12);
  const user = await User.create({
    ...data,
    password: hashedPassword,
  });
  return user;
}
