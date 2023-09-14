import Button from '@/components/ui/button/Button'
import { sizes } from '@/constants/size.constants'
import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { IProduct } from '@/types/product.interface'
import { convertCurrency } from '@/utils/convert-currency'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import ProductRating from './ProductRating'
import ProductReturns from './ProductReturns'
import styles from './ProductSlugPage.module.scss'

const ProductDescription: FC<{ product: IProduct }> = ({ product }) => {
  const { addToCart } = useActions()
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const { profile } = useProfile()

  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    ['toggle favorite'],
    () => UserService.toggleFavorite(product.id),
    {
      onSuccess() {
        queryClient.invalidateQueries(['get profile'])
      },
    },
  )

  if (!profile) return null

  const isFavorite = profile.favorites.some((favorite) => favorite.product.id === +product.id)

  return (
    <div style={{ maxWidth: '384px' }}>
      <div>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.category}>{product.category.name}</p>
        <p className={styles.price}>{convertCurrency(product.price)}</p>
      </div>
      <div className={styles.sizeGuide}>
        <p>Choose size</p>
        <p>Size Guide</p>
      </div>
      <div className={styles.sizeContainer}>
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => setSelectedSize(size)}
            className={selectedSize === size ? styles.active : styles.size}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="w-96 p-2">
        <Button
          onClick={() =>
            addToCart({ product, quantity: 1, price: product.price, size: selectedSize })
          }
          className={styles.addToCart}
        >
          Add to cart
        </Button>
        <Button
          onClick={() => {
            mutate()
          }}
          className={styles.addToFavorite}
        >
          Add to favorites{' '}
          <span className="text-xl ml-1">
            {isFavorite ? <AiFillHeart size={16} /> : <AiOutlineHeart size={16} />}
          </span>
        </Button>
      </div>
      <div className="w-96 my-12">{product.description}</div>
      <hr className={styles.customLine} />
      <ProductReturns />
      <hr className={styles.customLine} />
      <ProductRating product={product} key={product.id} />
      <hr className={styles.customLine} />
    </div>
  )
}

export default ProductDescription
