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
    return this.productService.findAll();
  }

  @Post()
  async create(
    @Body('title') title: string,
    @Body('image') image: string,
  ): Promise<void> {
    const product = await this.productService.create({ title, image });

    this.clientProxy.emit('product_created', product);
  }

  @Get(':id')
  listOne(@Param('id') productId: string): Promise<Product> {
    return this.productService.listOne(productId);
  }

  @Patch(':id')
  async update(
    @Param('id') productId: string,
    @Body('title') title: string,
    @Body('image') image: string,
  ): Promise<void> {
    const product = await this.productService.update(productId, {
      title,
      image,
    });

    this.clientProxy.emit('product_updated', product);
  }

  @Delete(':id')
  async remove(@Param('id') productId: string): Promise<void> {
    await this.productService.remove(productId);

    this.clientProxy.emit('product_deleted', productId);
  }

  @Post(':id/like')
  async like(@Param('id') productId: string): Promise<void> {
    return this.productService.like(productId);
  }
}
