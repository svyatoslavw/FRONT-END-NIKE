import { useFilter } from '@/app/(pages)/catalog/useFilters'
import { EnumProductSort } from '@/services/product/product.types'
import { FC } from 'react'
import Select from '../ui/select/Select'
import { SORT_DATA } from './sort.data'

const SortDropdown: FC = () => {
  const { queryParams, updateQueryParams } = useFilter()
  return (
    <div className="text-right z-10">
      <Select<EnumProductSort>
        data={SORT_DATA}
        onChange={(value) => updateQueryParams('sort', value.key.toString())}
        value={SORT_DATA.find((value) => value.key === queryParams.sort)}
        title="Sort by"
      />
    </div>
  )
}

export default SortDropdown
