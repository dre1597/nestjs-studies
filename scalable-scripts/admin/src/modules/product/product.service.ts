import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  create(data: { title: string; image: string }): Promise<Product> {
    return this.prismaService.product.create({
      data,
    });
  }
}
