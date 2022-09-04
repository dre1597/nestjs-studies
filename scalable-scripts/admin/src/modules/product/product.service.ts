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

  listOne(productId: string): Promise<Product> {
    return this.prismaService.product.findUnique({
      where: {
        id: productId,
      },
    });
  }

  update(
    productId: string,
    data: { title: string; image: string },
  ): Promise<Product> {
    return this.prismaService.product.update({
      where: {
        id: productId,
      },
      data,
    });
  }
}
