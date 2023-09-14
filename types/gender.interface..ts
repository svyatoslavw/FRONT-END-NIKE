import { IProduct } from './product.interface'

export interface IGender {
  id: number
  createdAt: string
  name: string
  slug: string
  products: IProduct[]
}
