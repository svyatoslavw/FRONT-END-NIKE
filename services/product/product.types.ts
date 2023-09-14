export type TypeProductData = {
  name?: string
  description?: string
  price?: string
  images?: string[]
  categoryId?: number
  genderId?: number
}

export interface IProductDto
  extends Pick<
    TypeProductData,
    'name' | 'description' | 'price' | 'images' | 'categoryId' | 'genderId'
  > {}

export enum EnumProductSort {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export type TypeProductDataFilters = {
  sort?: EnumProductSort | string
  searchTerm?: string
  page?: string | number
  perPage: string | number
  minPrice?: string
  maxPrice?: string
  categoryId?: string
  genderId?: string
}

export type TypeParamsFilters = {
  searchParams: TypeProductDataFilters
}
