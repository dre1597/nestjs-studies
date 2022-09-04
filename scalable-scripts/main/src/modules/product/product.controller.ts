import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  listAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @EventPattern('product_created')
  async create(product: any): Promise<void> {
    const { id, title, image, likes } = product;

    await this.productService.create({
      id,
      title,
      image,
      likes,
    });
  }

  @Post(':id/like')
  async like(@Param('id') productId: string): Promise<void> {
    return this.productService.like(productId);
  }

  @Get(':id')
  listOne(@Param('id') productId: string): Promise<Product> {
    return this.productService.findOne(productId);
  }

  @EventPattern('product_updated')
  async update(product: any): Promise<void> {
    const { id, title, image, likes } = product;

    await this.productService.update(id, { id, title, image, likes });
  }

  @EventPattern('product_deleted')
  async delete(productId: string): Promise<void> {
    await this.productService.delete(productId);
  }
}
