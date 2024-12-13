import { Injectable, NotFoundException, ConflictException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create a new user
  async createUser(data: Partial<User>): Promise<User> {
    // Check if the role is valid
    if (!['super_admin', 'admin'].includes(data.user_role)) {
      throw new BadRequestException('Invalid role. Role must be super_admin or admin.');
    }

    // If trying to create a super_admin, check if one already exists
    if (data.user_role === 'super_admin') {
      const superAdminExists = await this.userRepository.findOne({ where: { user_role: 'super_admin' } });
      if (superAdminExists) {
        throw new ConflictException('Only one super_admin can exist.');
      }
    }

    // Check if the email already exists
    const existingUser = await this.userRepository.findOne({ where: { user_email: data.user_email } });
    if (existingUser) {
      throw new ConflictException('Email already exists.');
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    // Create and save the user
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  // Get all users (excluding soft-deleted users)
  async getUsers(): Promise<User[]> {
    return this.userRepository.find({ where: { is_deleted: false } });
  }

  // Get a specific user by ID
  async getUserById(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { user_id: userId, is_deleted: false } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // Soft delete a user
  async softDeleteUser(userId: string): Promise<void> {
    const user = await this.getUserById(userId);
    user.is_deleted = true;
    await this.userRepository.save(user);
  }

  // Login a user
  async loginUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { user_email: email, is_deleted: false } });
    if (!user) {
      throw new NotFoundException('User not found or has been deleted.');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return user;
  }
}
