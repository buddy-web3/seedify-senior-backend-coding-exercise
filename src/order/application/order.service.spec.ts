import { OrderService } from './order.service';
import { OrderRepository } from '../domain/order.repository';
import { Order, OrderConstructorParameters } from '../domain/order';

describe('OrderService', () => {
  let orderService: OrderService;
  let orderRepository: OrderRepository;

  beforeEach(async () => {
    orderRepository = new OrderRepository();
    orderService = new OrderService(orderRepository);
  });

  it('should create an order', async () => {
    const orderData: OrderConstructorParameters = { id: '1', productId: 'p1', quantity: '2', userId: 'u1' };
    await orderService.createOrder(orderData);
    expect(await orderService.getOrderById('1')).toEqual(Order.create(orderData));
  });

  it('should return null if order does not exist', async () => {
    expect(await orderService.getOrderById('999')).toBeNull();
  });
});