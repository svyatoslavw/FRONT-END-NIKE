import { useFilter } from '@/app/(pages)/catalog/useFilters'
import Range from '@/components/ui/range/Range'
import { FC } from 'react'
import FilterWrapper from '../FilterWrapper'

const PriceGroup: FC = () => {
  const { queryParams, updateQueryParams } = useFilter()

  return (
    <FilterWrapper title="Price From/To">
      <Range
        max={2000}
        fromInitialValue={queryParams.minPrice}
        toInitialValue={queryParams.maxPrice}
        onChangeFromValue={(value) => updateQueryParams('minPrice', value)}
        onChangeToValue={(value) => updateQueryParams('maxPrice', value)}
      />
    </FilterWrapper>
  )
}

export default PriceGroup
