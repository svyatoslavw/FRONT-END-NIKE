enum EnumOrderStatus {
  PENDING = 'PENDING',
  PAYED = 'PAYED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
}

export type TypeData = {
  status?: EnumOrderStatus
  items: {
    price: number
    quantity: number
    productId: number
  }[]
}

export type TypePlaceOrderData = {
  invoiceId: string
  pageUrl: string
}
