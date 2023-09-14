import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'
import { TypeData, TypePlaceOrderData } from './order.types'

const ORDERS = 'orders'

export const OrderService = {
  async getAll() {
    return instance<IOrder[]>({
      url: ORDERS,
      method: 'GET',
    })
  },

  async getByUserId(id: number) {
    return instance<IOrder[]>({
      url: `${ORDERS}/by-user/`,
      method: 'GET',
    })
  },
  async getById(id: number) {
    return instance<IOrder>({
      url: `${ORDERS}/${id}`,
      method: 'GET',
    })
  },

  async place(data: TypeData) {
    return instance<TypePlaceOrderData>({
      url: ORDERS,
      method: 'POST',
      data,
    })
  },

  async delete(id: string | number) {
    return instance<IOrder>({
      url: `${ORDERS}/${id}`,
      method: 'DELETE',
    })
  },
}
