import Modal from '@/components/ui/modal/Modal'
import { useAuth } from '@/hooks/useAuth'
import { IProduct } from '@/types/product.interface'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { FC, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Rating } from 'react-simple-star-rating'
import CreateProductReview from './CreateProductReview'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
  const [rating, setRating] = useState(
    Math.round(
      product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length,
    ) || 0,
  )

  const [isModal, setIsModal] = useState(false)

  const { user } = useAuth()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="justify-between flex">
        <span className="text-xl"> Reviews ({product.reviews.length})</span>

        <span className="items-center flex">
          <Rating
            readonly
            initialValue={rating}
            SVGstyle={{
              display: 'inline-block',
            }}
            fillColor="#000000"
            size={18}
            allowFraction
            transition
          />
          <span className="ml-2">
            {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
          </span>
        </span>
      </div>

      {user && <button onClick={() => setIsModal(true)}>Leave a review</button>}

      {user && (
        <Modal isOpen={isModal} closeModal={() => setIsModal(false)}>
          <CreateProductReview productId={product.id} />
        </Modal>
      )}

      {isOpen && (
        <div>
          {product.reviews.map((review) => (
            <div className="my-10">
              <Rating
                readonly
                initialValue={review.rating}
                SVGstyle={{
                  display: 'inline-block',
                }}
                fillColor="#000000"
                size={18}
                allowFraction
                transition
              />
              <Link href={`/users/${review.user.slug}`}>
                <div className="flex justify-between text-lg">
                  <p>{review.user.name}</p>
                  <p>{formatDate(review.createdAt)}</p>
                </div>
              </Link>
              <div>{review.text}</div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ProductRating
