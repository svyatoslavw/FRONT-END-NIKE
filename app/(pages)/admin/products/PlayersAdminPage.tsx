'use client'
import AdminList from '@/components/ui/admin-list/AdminList'
import { FC } from 'react'
import { useAdminProducts } from './useAdminProducts'

const ProductsAdminPage: FC = () => {
  const { data, isFetching, mutate, create } = useAdminProducts()

  return (
    <AdminList
      text="Products"
      isLoading={isFetching}
      create={create}
      listItems={data}
      removeHandler={mutate}
    />
  )
}

export default ProductsAdminPage
