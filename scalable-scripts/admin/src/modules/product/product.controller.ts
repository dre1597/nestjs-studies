import { Body, Controller, Get, Post } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  listAll() {
    return this.productService.findAll();
  }

  @Post()
  create(@Body('title') title: string, @Body('image') image: string) {
    return this.productService.create({ title, image });
  }
}
