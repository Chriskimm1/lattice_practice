import bcrypt from 'bcryptjs';
import { User } from '../models/user';
import { CreateUserInput } from '../types';

async function createUser(data: CreateUserInput) {
  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(data.password, 12);
  const user = await User.create({
    ...data,
    password: hashedPassword,
  });
  return user;
}

export const resolvers = {
  Mutation: {
    createUser: async (_: any, { input }: { input: CreateUserInput }) => {
      return createUser(input);
    },
    // Add other mutations here
  },
  // Add Query resolvers here if needed
};

export { createUser };