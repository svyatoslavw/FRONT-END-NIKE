'use client'
import Loader from '@/components/ui/loader/Loader'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'
import styles from './Catalog.module.scss'
import ProductItem from './ProductItem'

const Catalog: FC<TypePaginationProduct> = ({ products, length, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="w-full justify-center flex">
          <Loader />
        </div>
      ) : products.length ? (
        <div className={styles.container}>
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <h1 className={styles.notFound}>Products not found</h1>
      )}
    </>
  )
}

export default Catalog
