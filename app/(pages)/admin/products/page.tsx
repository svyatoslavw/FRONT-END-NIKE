import Navbar from '@/components/navbar/Navbar'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { Metadata } from 'next'
import PlayersAdminPage from './PlayersAdminPage'

export const metadata: Metadata = {
  title: 'Products | Nike',
  ...NO_INDEX_PAGE,
}

export default function CommentsAdmin() {
  return (
    <div>
      <Navbar />
      <div className="mx-80 my-10 flex justify-center">
        <PlayersAdminPage />
      </div>
    </div>
  )
}
