import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async create(data: { title: string; image: string }): Promise<void> {
    await this.prismaService.product.create({
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

  async update(
    productId: string,
    data: { title: string; image: string },
  ): Promise<void> {
    await this.prismaService.product.update({
      where: {
        id: productId,
      },
      data,
    });
  }

  async remove(productId: string): Promise<void> {
    await this.prismaService.product.delete({
      where: {
        id: productId,
      },
    });
  }
}
