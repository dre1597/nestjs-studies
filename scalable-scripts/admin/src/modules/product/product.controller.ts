import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from '@prisma/client';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  listAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('image') image: string,
  ): Promise<Product> {
    return this.productService.create({ title, image });
  }

  @Get(':id')
  listOne(@Param('id') productId: string): Promise<Product> {
    return this.productService.listOne(productId);
  }
}
