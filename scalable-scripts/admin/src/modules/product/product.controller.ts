import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly clientProxy: ClientProxy,
  ) {}

  @Get()
  listAll(): Promise<Product[]> {
    this.clientProxy.emit('hello', 'Hello from RabbitMQ');
    return this.productService.findAll();
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('image') image: string,
  ): Promise<void> {
    return this.productService.create({ title, image });
  }

  @Get(':id')
  listOne(@Param('id') productId: string): Promise<Product> {
    return this.productService.listOne(productId);
  }

  @Patch(':id')
  update(
    @Param('id') productId: string,
    @Body('title') title: string,
    @Body('image') image: string,
  ): Promise<void> {
    return this.productService.update(productId, { title, image });
  }

  @Delete(':id')
  remove(@Param('id') productId: string): Promise<void> {
    return this.productService.remove(productId);
  }
}
