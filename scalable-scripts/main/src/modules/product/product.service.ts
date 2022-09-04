import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
  private _baseUrl = this.configService.get<string>('MAIN_API_URL');

  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(product): Promise<void> {
    await new this.productModel(product).save();
  }

  async like(productId: string): Promise<void> {
    const product: Product = await this.findOne(productId);

    this.httpService.post(`${this._baseUrl}/products/${productId}/like`, {});

    await this.update(productId, { likes: product.likes + 1 });
  }

  findOne(productId: string): Promise<Product> {
    return this.productModel.findOne({ id: productId }).exec();
  }

  async update(productId: string, product): Promise<void> {
    await this.productModel.findOneAndUpdate({ id: productId }, product).exec();
  }

  async delete(productId: string): Promise<void> {
    await this.productModel.deleteOne({ id: productId }).exec();
  }
}
