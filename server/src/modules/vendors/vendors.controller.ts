import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { VendorsService } from './vendors.service';

import { Vendor } from './entities/vendor.entity';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  // CREATE
  @Post()
  async create(@Body() vendorData: Partial<Vendor>): Promise<Vendor> {
    return this.vendorsService.create(vendorData);
  }

  // READ ALL
  @Get()
  async findAll(): Promise<Vendor[]> {
    return this.vendorsService.findAll();
  }

  // READ ONE
  @Get(':vendor_code')
  async findOne(@Param('vendor_code') vendor_code: string): Promise<Vendor> {
    return this.vendorsService.findOne(vendor_code);
  }

  // UPDATE
  @Patch(':vendor_code')
  async update(
    @Param('vendor_code') vendor_code: string,
    @Body() updateData: Partial<Vendor>,
  ): Promise<Vendor> {
    return this.vendorsService.update(vendor_code, updateData);
  }

  // DELETE
  @Delete(':vendor_code')
  async delete(@Param('vendor_code') vendor_code: string): Promise<void> {
    return this.vendorsService.delete(vendor_code);
  }
}
