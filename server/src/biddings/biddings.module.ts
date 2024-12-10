// src/biddings/biddings.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bidding } from './entities/bidding.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bidding])],
})
export class BiddingsModule {}
