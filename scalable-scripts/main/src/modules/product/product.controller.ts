import { Controller, Get, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

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
  async delete(id: number): Promise<void> {
    await this.productService.delete(id);
  }
}
