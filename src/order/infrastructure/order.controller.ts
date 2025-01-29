import { OrderService } from '../application/order.service';
import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto } from '../domain/order.repository';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) orderData: CreateOrderDto) {
    await this.orderService.createOrder(orderData);
    return { message: 'Order created successfully' };
  }

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      return { message: 'Order not found' };
    }
    return order;
  }
}
