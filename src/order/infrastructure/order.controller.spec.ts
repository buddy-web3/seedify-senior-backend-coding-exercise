import { OrderController } from './order.controller';
import { OrderService } from '../application/order.service';
import { OrderRepository } from '../domain/order.repository';
import { Order, OrderConstructorParameters } from '../domain/order';

describe('OrderController', () => {
  let orderController: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    orderService = new OrderService(new OrderRepository());
    orderController = new OrderController(orderService);
  });

  it('should create an order and return success message', async () => {
    const orderData: OrderConstructorParameters = { id: '1', productId: 'p1', quantity: '2', userId: 'u1' };
    expect(await orderController.createOrder(orderData)).toEqual({ message: 'Order created successfully' });
  });

  it('should return an order by ID', async () => {
    const orderData: OrderConstructorParameters = { id: '1', productId: 'p1', quantity: '2', userId: 'u1' };
    await orderController.createOrder(orderData);
    expect(await orderController.getOrder('1')).toEqual(Order.create(orderData));
  });

  it('should return not found message if order does not exist', async () => {
    expect(await orderController.getOrder('999')).toEqual({ message: 'Order not found' });
  });
});
