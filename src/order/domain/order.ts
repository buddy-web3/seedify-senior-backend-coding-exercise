export type OrderConstructorParameters = {
  id: string;
  productId: string;
  quantity: string;
  userId: string;
};

export class Order {
  private constructor(
    public readonly id: string,
    public readonly productId: string,
    public readonly quantity: string,
    public readonly userId: string
  ) {}

  static create(orderData: OrderConstructorParameters): Order {
    return new Order(orderData.id, orderData.productId, orderData.quantity, orderData.userId);
  }
}