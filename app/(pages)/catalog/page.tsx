import { ProductService } from '@/services/product/product.service'
import { TypeParamsFilters, TypeProductDataFilters } from '@/services/product/product.types'
import { Metadata } from 'next'
import ExplorerPage from './ExplorerPage'

export const metadata: Metadata = {
  title: 'Catalog | Nike',
}

async function getProducts(searchParams: TypeProductDataFilters) {
  const data = await ProductService.getAll(searchParams)

  return data
}

export default async function Explorer({ searchParams }: TypeParamsFilters) {
  const data = await getProducts(searchParams)

  return <ExplorerPage initialProducts={data} />
}
