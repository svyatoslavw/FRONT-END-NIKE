import { IListItem } from '@/components/ui/admin-list/admin-list.interface'
import { OrderService } from '@/services/order/order.service'
import { convertCurrency } from '@/utils/convert-currency'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useAdminOrders = () => {
  const { data, isFetching, refetch } = useQuery(
    ['get admin orders'],
    () => OrderService.getAll(),
    {
      select: (data) =>
        data.data.map((order): IListItem => {
          return {
            id: order.id,
            items: [
              `# ${String(order.id)}`,
              order.status,
              convertCurrency(order.total),
              new Date(order.createdAt).toLocaleDateString('ru-Ru'),
            ],
          }
        }),
    },
  )

  const { mutate } = useMutation(['delete order'], (id: number) => OrderService.delete(id), {
    onSuccess() {
      refetch()
    },
  })

  const { push } = useRouter()

  return { mutate, data, isFetching }
}
