'use client'
import AdminList from '@/components/ui/admin-list/AdminList'
import { FC } from 'react'
import { useAdminOrders } from './useAdminOrders'

const OrdersAdminPage: FC = () => {
  const { data, isFetching, mutate } = useAdminOrders()

  return <AdminList text="Orders" isLoading={isFetching} listItems={data} removeHandler={mutate} />
}

export default OrdersAdminPage
