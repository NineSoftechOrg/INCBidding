import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './entities/vendor.entity';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ) {}

  // CREATE
  async create(vendorData: Partial<Vendor>): Promise<Vendor> {
    const vendor = this.vendorRepository.create(vendorData);
    return await this.vendorRepository.save(vendor);
  }

  // READ ALL
  async findAll(): Promise<Vendor[]> {
    return await this.vendorRepository.find();
  }

  // READ ONE
  async findOne(vendor_code: string): Promise<Vendor> {
    const vendor = await this.vendorRepository.findOneBy({ vendor_code });
    if (!vendor) {
      throw new NotFoundException(`Vendor with code ${vendor_code} not found`);
    }
    return vendor;
  }

  // UPDATE
  async update(vendor_code: string, updateData: Partial<Vendor>): Promise<Vendor> {
    await this.findOne(vendor_code); // Ensure vendor exists
    await this.vendorRepository.update({ vendor_code }, updateData);
    return this.findOne(vendor_code);
  }

  // DELETE
  async delete(vendor_code: string): Promise<void> {
    const result = await this.vendorRepository.delete({ vendor_code });
    if (result.affected === 0) {
      throw new NotFoundException(`Vendor with code ${vendor_code} not found`);
    }
  }
}
