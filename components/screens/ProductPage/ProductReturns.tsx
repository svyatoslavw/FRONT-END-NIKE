import Link from 'next/link'
import { FC, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const ProductReturns: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="justify-between flex">
        <span className="text-xl">Shipping & Returns</span>

        <span className="ml-2">
          {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </span>
      </div>
      {isOpen && (
        <div>
          <div className="my-10 text-lg">
            <p>
              Free standard shipping on orders $50+ and free 60-day returns for Nike Members. Learn
              more. Return policy exclusions apply.
            </p>
            <br />
            <Link href={'/'} className="underline">
              Pick-up available at select Nike Stores.
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductReturns
