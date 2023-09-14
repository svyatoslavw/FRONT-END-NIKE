import { useFilter } from '@/app/(pages)/catalog/useFilters'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { useGenders } from '@/hooks/useGenders'
import { FC } from 'react'
import FilterWrapper from '../FilterWrapper'

const GenderGroup: FC = () => {
  const { queryParams, updateQueryParams } = useFilter()
  const { data, isLoading } = useGenders()
  return (
    <FilterWrapper title="Gender">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : data?.length ? (
        data.map((gender) => {
          const isChecked = queryParams.genderId === gender.id.toString()

          return (
            <Checkbox
              isChecked={isChecked}
              onClick={() => updateQueryParams('genderId', isChecked ? '' : gender.id.toString())}
              key={gender.id}
              className="mb-2 text-sm"
            >
              {gender.name}
            </Checkbox>
          )
        })
      ) : (
        <p>Gender not found</p>
      )}
    </FilterWrapper>
  )
}

export default GenderGroup
