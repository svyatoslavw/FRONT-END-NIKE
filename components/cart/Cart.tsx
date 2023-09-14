import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { OrderService } from '@/services/order/order.service'
import { convertCurrency } from '@/utils/convert-currency'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { PiBag } from 'react-icons/pi'
import Button from '../ui/button/Button'
import './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
  const { push } = useRouter()

  const { isShow, setIsShow, ref } = useOutside(false)

  const { reset } = useActions()
  const cart = useTypedSelector((state) => state.cart.items)

  const total = cart.reduce((acc, item) => (acc += item.product.price), 0)

  const { mutate } = useMutation(
    ['create order and payment'],
    () =>
      OrderService.place({
        items: cart.map((item) => ({
          price: item.price,
          quantity: item.quantity,
          productId: item.product.id,
        })),
      }),
    {
      onSuccess({ data }) {
        reset()
        push(data.pageUrl)
      },
    },
  )

  return (
    <div>
      {/* Cart Icon */}
      <button
        className="flex items-center hover:bg-slate-200 p-1 rounded-full"
        onClick={() => setIsShow(!isShow)}
      >
        <span className="text-xs absolute ml-2.5 mt-1 font-medium">{cart.length}</span>
        <PiBag size={27} />
      </button>

      {/* Cart Container */}
      {isShow && (
        <div
          ref={ref}
          className={clsx(
            'absolute right-4 mt-7 h-96 z-30 overflow-x-auto w-72 bg-white border border-gray-200 shadow-lg rounded-2xl menu',
            isShow && 'open-menu',
          )}
        >
          <div className="px-3">
            {/* Cart Items */}
            {cart.length ? (
              cart.map((item) => <CartItem item={item} key={item.id} />)
            ) : (
              <h1 className="my-36 text-center">Cart is empty</h1>
            )}
          </div>
          <div className="text-xl p-1.5">
            <div className="text-lg">Total: </div>
            <div>{convertCurrency(total)}</div>
            <span className="text-center flex justify-center">
              {cart.length ? (
                <Button
                  className="text-black bg-secondary hover:bg-red-300 my-5 duration-300"
                  onClick={() => mutate()}
                >
                  Payment
                </Button>
              ) : null}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
