import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(product): Promise<void> {
    await new this.productModel(product).save();
  }

  findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ id }).exec();
  }

  async update(id: number, product): Promise<void> {
    await this.productModel.findOneAndUpdate({ id }, product).exec();
  }

  async delete(id: number): Promise<void> {
    await this.productModel.deleteOne({ id }).exec();
  }
}
