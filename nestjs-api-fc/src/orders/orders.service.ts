import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderModel: typeof Order) {}

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderModel.create({
      ...createOrderDto,
    });
  }

  findAll(): Promise<Order[]> {
    return this.orderModel.findAll();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findOne({
      where: {
        id,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findOne(id);

    return await order.update({
      ...updateOrderDto,
    });
  }

  async remove(id: string): Promise<void> {
    const order = await this.findOne(id);

    await order.destroy();
  }
}
