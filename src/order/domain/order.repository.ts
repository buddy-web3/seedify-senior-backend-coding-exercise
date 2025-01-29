import { Order } from './order';
import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.find(order => order.id === id) || null;
  }
}

type OrderData = { id: string; productId: string; quantity: string; userId: string };

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}