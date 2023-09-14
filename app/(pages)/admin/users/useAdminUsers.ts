import { IListItem } from '@/components/ui/admin-list/admin-list.interface'
import { UserService } from '@/services/user.service'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminOrders = () => {
  const { data, isFetching, refetch } = useQuery(['get admin orders'], () => UserService.getAll(), {
    select: (data) =>
      data.data.map((user): IListItem => {
        return {
          id: user.id,
          items: [
            `# ${String(user.id)}`,
            user.email,
            user.name,
            user.isAdmin === true ? 'Admin' : 'User',
          ],
        }
      }),
  })

  const { mutate } = useMutation(['delete user'], (id: number) => UserService.delete(id), {
    onSuccess() {
      refetch()
    },
  })

  return { mutate, data, isFetching }
}
