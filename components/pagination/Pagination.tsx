import Button from '@/components/ui/button/Button'
import { FC } from 'react'

interface IPagination {
  numberPages: number
  changePage: (page: string) => void
  currentPage?: number | string
}

const Pagination: FC<IPagination> = ({ numberPages, changePage, currentPage }) => {
  return (
    <div className="text-center m-auto mt-16 mb-4 flex gap-2">
      {Array.from({ length: numberPages > 1 ? numberPages : 1 }).map((_, index) => {
        const pageNumber = (index + 1).toString()

        return (
          <Button
            style={
              currentPage === pageNumber
                ? { backgroundColor: '#F5F5F5' }
                : { backgroundColor: '#FFFFFF' }
            }
            className="m-1 px-3.5 py-1.5 text-sm"
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </Button>
        )
      })}
    </div>
  )
}

export default Pagination
