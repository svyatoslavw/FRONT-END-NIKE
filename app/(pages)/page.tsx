import { ProductService } from '@/services/product/product.service'
import { TypeParamsFilters, TypeProductDataFilters } from '@/services/product/product.types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Nike',
}

async function getProducts(searchParams: TypeProductDataFilters) {
  const data = await ProductService.getAll(searchParams)

  return data
}
export default async function Home({ searchParams }: TypeParamsFilters) {
  const data = await getProducts(searchParams)
}
