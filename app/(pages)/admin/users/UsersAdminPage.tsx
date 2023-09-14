'use client'
import AdminList from '@/components/ui/admin-list/AdminList'
import { FC } from 'react'
import { useAdminOrders } from './useAdminUsers'

const UsersAdminPage: FC = () => {
  const { data, isFetching, mutate } = useAdminOrders()

  return <AdminList text="Users" isLoading={isFetching} listItems={data} removeHandler={mutate} />
}

export default UsersAdminPage
