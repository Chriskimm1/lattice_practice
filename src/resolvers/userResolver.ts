import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../models/user';
import { CreateUserInput, LoginInput } from '../types';
import { AuthService } from '../middleware/auth';

@Resolver()
export class UserResolver {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput): Promise<User> {
    const user = await User.create(data);
    return user;
  }

  @Mutation(() => String)
  async loginUser(@Arg('data') data: LoginInput): Promise<String> {
    const token = await this.authService.login(data.email, data.password);
    return token;
  }

  @Query(() => User, { nullable: true })
  async getUser(@Arg('id') id: string): Promise<User | null> {
    const user = await User.findById(id);
    return user;
  }
}