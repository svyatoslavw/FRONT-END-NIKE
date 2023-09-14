import { EnumProductSort } from '@/services/product/product.types'
import { ISelectItem } from '../ui/select/select.intercafe'

export const SORT_DATA: ISelectItem<EnumProductSort>[] = [
  {
    key: EnumProductSort.HIGH_PRICE,
    label: 'High price',
  },
  {
    key: EnumProductSort.LOW_PRICE,
    label: 'Low price',
  },
  {
    key: EnumProductSort.NEWEST,
    label: 'Newest',
  },
  {
    key: EnumProductSort.OLDEST,
    label: 'Oldest',
  },
]
