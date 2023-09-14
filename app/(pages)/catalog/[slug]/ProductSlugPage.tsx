'use client'
import ProductSlider from '@/components/slider/ProductSlider'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import ProductDescription from '../../../../components/screens/ProductPage/ProductDescription'
import { ProductGallery } from '../../../../components/screens/ProductPage/ProductGallery'

interface TypeProducPage {
  initialProduct: IProduct
  similarProducts: IProduct[]
  slug?: string
}

export default function ProductSlugItem({
  initialProduct,
  similarProducts,
  slug = '',
}: TypeProducPage) {
  const { data: product } = useQuery(
    ['get product', initialProduct.id],
    () => ProductService.getBySlug(slug),
    {
      initialData() {
        initialProduct
      },
      enabled: !!slug,
    },
  )

  return (
    <div>
      <div className="flex justify-center gap-20 mb-32">
        <ProductGallery images={initialProduct.images} />
        <ProductDescription product={initialProduct} />
      </div>
      <div className="flex justify-center" id="target-block">
        <ProductSlider similarProducts={similarProducts} />
      </div>
    </div>
  )
}
