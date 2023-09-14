import { Metadata } from 'next'
import OrdersPage from './OrdersPage'

export const metadata: Metadata = {
  title: 'My orders | Nike',
}

export default function Orders() {
  return <OrdersPage />
}
