import { axiosClassic, instance } from '@/api/api.interceptor'
import { IProduct, TypePaginationProduct } from '@/types/product.interface'
import { TypeProductData, TypeProductDataFilters } from './product.types'

const PRODUCTS = '/products'

export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    const { data } = await axiosClassic<TypePaginationProduct>({
      url: PRODUCTS,
      method: 'GET',
      params: queryData,
    })
    return data
  },
  async getById(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'GET',
      // headers: {
      //   'Content-Type': 'text/html; charset=utf-8', // Укажите правильную кодировку
      // },
    })
  },
  async getBySlug(slug: string) {
    return instance<IProduct>({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: 'GET',
    })
  },

  async getSimilar(id: string | number) {
    return instance<IProduct[]>({
      url: `${PRODUCTS}/similar/${id}`,
      method: 'GET',
    })
  },

  async create() {
    return instance<IProduct>({
      url: PRODUCTS,
      method: 'POST',
    })
  },

  async update(id: string | number, data: TypeProductData) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'PUT',
      data,
    })
  },

  async delete(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'DELETE',
    })
  },
}
