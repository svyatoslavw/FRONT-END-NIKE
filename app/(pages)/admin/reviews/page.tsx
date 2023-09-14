import Navbar from '@/components/navbar/Navbar'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { Metadata } from 'next'
import UsersAdminPage from './ReviewsAdminPage'

export const metadata: Metadata = {
  title: 'Reviews | Nike',
  ...NO_INDEX_PAGE,
}

export default function ReviewsAdmin() {
  return (
    <div>
      <Navbar />
      <div className="mx-80 my-10 flex justify-center">
        <UsersAdminPage />
      </div>
    </div>
  )
}
