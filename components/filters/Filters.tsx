'use client'
import { FC } from 'react'
import CategoryGroup from './category-group/CategoryGroup'
import GenderGroup from './gender-group/GenderGroup'
import PriceGroup from './price-group/PriceGroup'

const Filter: FC = () => {
  return (
    <div className="w-60">
      <PriceGroup />
      <hr className="border-b my-3" />
      <GenderGroup />
      <hr className="border-b my-3" />
      <CategoryGroup />
      <hr className="border-b my-3" />
    </div>
  )
}

export default Filter
