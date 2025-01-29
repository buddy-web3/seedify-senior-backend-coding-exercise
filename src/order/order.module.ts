import { Module } from '@nestjs/common';

import { OrderController } from './infrastructure/order.controller';
import { OrderService } from './application/order.service';
import { OrderRepository } from './domain/order.repository';
@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
