import ProductItem from '@/components/screens/catalog/ProductItem'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

interface ISimilarProducts {
  similarProducts: IProduct[]
}

const ProductSimilar: FC<ISimilarProducts> = ({ similarProducts }) => {
  return (
    <div className="mt-20">
      <h1 className="mb-7">Similar Products</h1>
      <div className="grid grid-cols-4 gap-10">
        {similarProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductSimilar
