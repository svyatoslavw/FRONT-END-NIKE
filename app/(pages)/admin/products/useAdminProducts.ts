import { IListItem } from '@/components/ui/admin-list/admin-list.interface'
import { getAdminUrl } from '@/config/url.config'
import { ProductService } from '@/services/product/product.service'
import { convertCurrency } from '@/utils/convert-currency'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useAdminProducts = () => {
  const { data, isFetching, refetch } = useQuery(
    ['get admin products'],
    () => ProductService.getAll(),
    {
      select: (data) =>
        data.products.map((product): IListItem => {
          return {
            id: product.id,
            viewUrl: `/products/${product.slug}`,
            editUrl: getAdminUrl(`/products/edit/${product.id}`),
            items: [
              `# ${String(product.id)}`,
              product.name,
              convertCurrency(+product.price),
              new Date(product.createdAt).toLocaleDateString('ru-Ru'),
            ],
          }
        }),
    },
  )

  const { mutate } = useMutation(['delete product'], (id: number) => ProductService.delete(id), {
    onSuccess() {
      refetch()
    },
  })

  const { push } = useRouter()

  const { mutate: create } = useMutation(['create product'], () => ProductService.create(), {
    onSuccess({ data: id }) {
      refetch()
      push(getAdminUrl(`/products/edit/${id}`))
    },
  })

  return { mutate, data, isFetching, create }
}
