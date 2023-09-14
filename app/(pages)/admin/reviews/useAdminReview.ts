import { IListItem } from '@/components/ui/admin-list/admin-list.interface'
import { ReviewService } from '@/services/review.service'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminReviews = () => {
  const { data, isFetching, refetch } = useQuery(
    ['get admin reviews'],
    () => ReviewService.getAll(),
    {
      select: (data) =>
        data.data.map((review): IListItem => {
          return {
            id: review.id,
            items: [
              `# ${String(review.id)}`,
              String(review.rating),
              review.user.name,
              new Date(review.createdAt).toLocaleDateString('ru-Ru'),
            ],
          }
        }),
    },
  )

  const { mutate } = useMutation(['delete review'], (id: number) => ReviewService.delete(id), {
    onSuccess() {
      refetch()
    },
  })

  return { mutate, data, isFetching }
}
