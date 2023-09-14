import { useFilter } from '@/app/(pages)/catalog/useFilters'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { useCategories } from '@/hooks/useCategories'
import { FC } from 'react'
import FilterWrapper from '../FilterWrapper'

const CategoryGroup: FC = () => {
  const { queryParams, updateQueryParams } = useFilter()
  const { data, isLoading } = useCategories()
  return (
    <FilterWrapper title="Category">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : data?.length ? (
        data.map((category) => {
          const isChecked = queryParams.categoryId === category.id.toString()

          return (
            <Checkbox
              isChecked={isChecked}
              onClick={() =>
                updateQueryParams('categoryId', isChecked ? '' : category.id.toString())
              }
              key={category.id}
              className="mb-2 text-sm"
            >
              {category.name}
            </Checkbox>
          )
        })
      ) : (
        <p>Category not found</p>
      )}
    </FilterWrapper>
  )
}

export default CategoryGroup
