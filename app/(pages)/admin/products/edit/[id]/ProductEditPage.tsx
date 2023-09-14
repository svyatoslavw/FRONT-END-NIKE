'use client'
import Field from '@/components/ui/input/Field'
import UploadField from '@/components/upload-field/UploadField'
import { ProductService } from '@/services/product/product.service'
import { IProductDto } from '@/services/product/product.types'
import { ICategory } from '@/types/category.interface'
import { IGender } from '@/types/gender.interface.'
import { IProduct } from '@/types/product.interface'
import { Select } from '@chakra-ui/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { MdArrowDropDown } from 'react-icons/md'
import styles from './ProductEditPage.module.scss'

type TypeEdit = {
  product: IProduct
  params: number
  category: ICategory[]
  gender: IGender[]
}

const ProductEditPage: FC<TypeEdit> = ({ product, category, params, gender }) => {
  const { push } = useRouter()

  const productId = Number(params)

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    control,
  } = useForm<IProductDto>({ mode: 'onChange' })

  const { data, isLoading } = useQuery(
    ['get product private by id', productId],
    () => ProductService.getById(+productId),
    {
      onSuccess({ data }) {
        setValue('name', data.name)
        setValue('price', data.price)
        setValue('description', data.description)
        setValue('categoryId', data.categoryId)
        setValue('genderId', data.genderId)
        setValue('images', data.images)
      },
      enabled: !!productId,
    },
  )

  const { mutate } = useMutation(
    ['update product'],
    (data: IProductDto) => ProductService.update(productId, data),
    {
      onSuccess() {
        push('/')
      },
    },
  )

  const onSubmit: SubmitHandler<IProductDto> = (data) => {
    mutate(data)
  }

  console.log(data?.data.categoryId)
  console.log(data?.data.genderId)
  console.log(data?.data.price)
  return (
    <div>
      <h1 className="text-3xl">Edit Mode</h1>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-96">
          <Field
            placeholder="name"
            {...register('name', {
              required: 'name is required',
            })}
            error={errors.name?.message}
            className="my-3"
          />

          <Field
            type="number"
            placeholder="price"
            {...register('price', {
              required: 'price is required',
              valueAsNumber: true,
            })}
            error={errors.price?.message}
            className="my-3 appearance-none"
          />

          <Field
            placeholder="Description"
            {...register('description', {
              required: 'description is required',
            })}
            error={errors.description?.message}
            className="my-3"
          />

          <label className="mb-2">Category</label>
          <Controller
            control={control}
            rules={{
              required: 'category is required',
            }}
            {...register('categoryId')}
            render={({ field }) => (
              <Select
                {...field}
                icon={<MdArrowDropDown />}
                variant="outline"
                onChange={(event: any) => {
                  const numValue = Number(event.target.value) // Используйте parseInt или parseFloat
                  field.onChange(numValue)
                }}
                className={styles.select}
              >
                <option disabled value={product.category && product.category.id}>
                  {product.category ? product.category.name : 'Select a category'}
                </option>
                {category.map((category) => (
                  <option key={category.id} value={category.id} style={{ fontSize: 17 }}>
                    {category.name}
                  </option>
                ))}
              </Select>
            )}
          />

          <label className="mb-2">Gender</label>
          <Controller
            control={control}
            rules={{
              required: 'gender is required',
            }}
            {...register('genderId')}
            render={({ field }) => (
              <Select
                {...field}
                icon={<MdArrowDropDown />}
                variant="outline"
                onChange={(event: any) => {
                  const numValue = Number(event.target.value) // Используйте parseInt или parseFloat
                  field.onChange(numValue)
                }}
                className={styles.select}
              >
                <option disabled value={product.gender && product.gender.id}>
                  {product.gender ? product.gender.name : 'Select a gender'}
                </option>
                {gender.map((gender) => (
                  <option key={gender.id} value={gender.id} style={{ fontSize: 17 }}>
                    {gender.name}
                  </option>
                ))}
              </Select>
            )}
          />

          <Controller
            control={control}
            name="images"
            render={({ field: { onChange, value } }) => (
              <UploadField onChange={onChange} value={value} />
            )}
          />
          <button>Save</button>
        </form>
      )}
    </div>
  )
}

export default ProductEditPage
