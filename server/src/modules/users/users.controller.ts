import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Creating a new user
  @Post()
  async createUser(@Body() data: Partial<User>): Promise<User> {
    return this.usersService.createUser(data);
  }

  // Login a user
  @Post('login')
  async loginUser(@Body('user_email') email: string, @Body('password') password: string): Promise<User> {
    return this.usersService.loginUser(email, password);
  }

  // Get all users
  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  // Get a specific user by ID
  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  // Soft deleting a user
  @Delete(':id')
  async softDeleteUser(@Param('id') userId: string): Promise<void> {
    return this.usersService.softDeleteUser(userId);
  }
}
