import { OrderRepository } from '../domain/order.repository';
import { Injectable } from '@nestjs/common';
import { Order, OrderConstructorParameters } from '../domain/order';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(orderData: OrderConstructorParameters): Promise<void> {
    const order = Order.create(orderData);
    await this.orderRepository.save(order);
  }

  async getOrderById(id: string): Promise<Order | null> {
    return await this.orderRepository.findById(id);
  }
}