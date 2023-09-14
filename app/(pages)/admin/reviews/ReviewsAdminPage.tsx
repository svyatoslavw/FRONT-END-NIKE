'use client'
import AdminList from '@/components/ui/admin-list/AdminList'
import { FC } from 'react'
import { useAdminReviews } from './useAdminReview'

const ReviewsAdminPage: FC = () => {
  const { data, isFetching, mutate } = useAdminReviews()

  return <AdminList text="Reviews" isLoading={isFetching} listItems={data} removeHandler={mutate} />
}

export default ReviewsAdminPage
