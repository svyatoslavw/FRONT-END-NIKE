import Navbar from '@/components/navbar/Navbar'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { Metadata } from 'next'
import OrdersAdminPage from './OrdersAdminPageAdminPage'

export const metadata: Metadata = {
  title: 'Orders | Nike',
  ...NO_INDEX_PAGE,
}

export default function OrdersAdmin() {
  return (
    <div>
      <Navbar />
      <div className="mx-80 my-10 flex justify-center">
        <OrdersAdminPage />
      </div>
    </div>
  )
}
