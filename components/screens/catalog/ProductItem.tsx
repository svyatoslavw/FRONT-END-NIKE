'use client'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './ProductItem.module.scss'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const loaderProp = ({ src }: any) => {
    return src
  }
  return (
    <div className={styles.item}>
      <div>
        <Link href={`/catalog/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            className={styles.image}
            priority
            loader={loaderProp}
            width={560}
            height={530}
            unoptimized={true}
          />
        </Link>
      </div>
      <div>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>{product.price}$</p>
      </div>
    </div>
  )
}

export default ProductItem
