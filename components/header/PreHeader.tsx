import { TypeProductDataFilters } from '@/services/product/product.types'
import { Dispatch, FC, SetStateAction } from 'react'
import { LuSettings2 } from 'react-icons/lu'
import SortDropdown from '../sort/SortDropdown'
import Button from '../ui/button/Button'

type TypePreHeader = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  queryParams: TypeProductDataFilters
}

const PreHeader: FC<TypePreHeader> = ({ isOpen, setIsOpen, queryParams }) => {
  return (
    <div className="flex w-full justify-between py-5">
      <div>
        <h1 className="text-2xl">
          {queryParams.searchTerm ? `Seacrh by query ${queryParams.searchTerm}` : ''}
        </h1>{' '}
      </div>
      <div className="flex gap-3 items-center">
        <Button onClick={() => setIsOpen(!isOpen)} className=" bg-transparent shadow-none">
          {isOpen ? 'Close' : 'Open'} filters <LuSettings2 />
        </Button>
        <SortDropdown />
      </div>
    </div>
  )
}

export default PreHeader
