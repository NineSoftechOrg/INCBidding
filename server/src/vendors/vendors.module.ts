// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
})
export class VendorsModule {}
