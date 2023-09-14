import { useActions } from '@/hooks/useActions'
import { ICartItem } from '@/types/cart.interface'
import Image from 'next/image'
import { FC } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  const { removeFromCart } = useActions()
  const loaderProp = ({ src }: any) => {
    return src
  }
  return (
    <>
      <div className={styles.item}>
        <Image
          src={item.product.images[0]}
          loader={loaderProp}
          alt={item.product.name}
          className="h-[100px] object-cover"
          width={110}
          height={130}
        />
        <div className={styles.name}>{item.product.name}</div>
        <div className={styles.size}>{item.size}</div>
        <div className={styles.price}>
          <p>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(item.product.price)}
          </p>
          <button
            onClick={() => removeFromCart({ id: item.product.id })}
            className=" mt-0 text-xs p-2 rounded-xl "
          >
            <BsFillTrash3Fill size={16} />
          </button>
        </div>
      </div>
    </>
  )
}

export default CartItem
