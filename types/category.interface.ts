import { IProduct } from './product.interface'

export interface ICategory {
  id: number
  createdAt: string
  name: string
  slug: string
  products: IProduct[]
}
