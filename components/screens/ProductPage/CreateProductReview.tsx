'use client'
import TextArea from '@/components/ui/text-area/TextArea'
import { ReviewService } from '@/services/review.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'
import styles from './ProductSlugPage.module.scss'

export interface IRiviewFields {
  rating: number
  text: string
}

const CreateProductReview: FC<{ productId: number }> = ({ productId }) => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IRiviewFields>({
    mode: 'onChange',
  })

  const queryClient = useQueryClient()

  const { mutate, isSuccess, isLoading } = useMutation(
    ['create review'],
    (data: IRiviewFields) => ReviewService.leave(productId, data),
    {
      onSuccess(data) {
        queryClient.refetchQueries(['get product', productId])
      },
    },
  )

  const onSubmit: SubmitHandler<IRiviewFields> = (data) => {
    mutate(data)
    reset()
  }

  if (isSuccess) return <div>Review successfully published!</div>

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h1 className="text-center text-xl font-medium">Leave a review</h1>
            <Controller
              control={control}
              name="rating"
              render={({ field: { onChange, value } }) => (
                <Rating
                  onClick={onChange}
                  initialValue={value}
                  SVGstyle={{
                    display: 'inline-block',
                  }}
                  size={30}
                  transition
                  fillColor="#000000"
                  allowFraction
                />
              )}
              rules={{
                required: 'Rating is required',
              }}
            />
            <TextArea
              {...formRegister('text', {
                required: 'text is required',
              })}
              placeholder="Type your text..."
            />

            <div className="text-center my-4">
              <button type="submit" className={styles.createBtn}>
                Leave
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default CreateProductReview
