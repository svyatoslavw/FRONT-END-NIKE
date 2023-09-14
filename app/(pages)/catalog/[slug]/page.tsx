import { Metadata } from 'next'

import { ProductService } from '@/services/product/product.service'
import { IPageProductSlug, TypeParamProducSlug } from '@/types/page-product-param'
import ProductSlugItem from './ProductSlugPage'

export const revalidate = 60

export async function generateMetadata({ params }: IPageProductSlug): Promise<Metadata> {
  const data = await getProduct(params)

  return {
    title: `${data.product.name} | CS PROJECT`,
    description: `description about ${data.product.name}`,
  }
}

export async function generateStaticParams() {
  const data = await ProductService.getAll()

  const paths = data.products.map((product) => {
    return {
      params: { slug: product.slug },
    }
  })

  return paths
}

async function getProduct(params: TypeParamProducSlug) {
  const { data: product } = await ProductService.getBySlug(params?.slug as string)

  const { data: similarProducts } = await ProductService.getSimilar(product.id)
  return { similarProducts, product }
}

export default async function PlayerSlugPage({ params }: IPageProductSlug) {
  const { product, similarProducts } = await getProduct(params)

  return (
    <ProductSlugItem
      initialProduct={product}
      similarProducts={similarProducts}
      slug={params.slug}
    />
  )
}
