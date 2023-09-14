import { ICategory } from './category.interface'
import { IGender } from './gender.interface.'
import { IReview } from './review.interface'

export interface IProduct {
  id: number
  createdAt: string
  name: string
  description: string
  slug: string
  price: number
  category: ICategory
  categoryId: number
  reviews: IReview[]
  gender: IGender
  genderId: number
  images: string[]
}

export type TypePaginationProduct = {
  length: number
  isLoading?: boolean
  products: IProduct[]
}

export interface IFavorite {
  id: number
  createdAt: string
  product: IProduct
}
