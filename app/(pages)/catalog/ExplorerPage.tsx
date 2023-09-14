'use client'
import { useFilter } from '@/app/(pages)/catalog/useFilters'
import Filter from '@/components/filters/Filters'
import PreHeader from '@/components/header/PreHeader'
import Pagination from '@/components/pagination/Pagination'
import { ProductService } from '@/services/product/product.service'
import { TypePaginationProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { FC, useState } from 'react'
import Catalog from '../../../components/screens/catalog/Catalog'
import styles from './ExplorerPage.module.scss'

interface ICatalogProducts {
  initialProducts: TypePaginationProduct
}

const ExplorerPage: FC<ICatalogProducts> = ({ initialProducts }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { isFilterUpdated, queryParams, updateQueryParams } = useFilter()

  const { data, isFetching } = useQuery(
    ['product explorer', queryParams],
    () => ProductService.getAll(queryParams),
    {
      initialData: initialProducts,
      enabled: isFilterUpdated,
    },
  )
  return (
    <div className="flex flex-wrap justify-between mx-8 mt-2">
      <PreHeader isOpen={isOpen} setIsOpen={setIsOpen} queryParams={queryParams} />
      <div
        className={clsx(styles.catalog, {
          [styles.filterOpened]: isOpen,
        })}
      >
        <aside>
          <Filter />
        </aside>
        <section
          className={clsx(styles.catalog, {
            [styles.filterOpened]: isOpen,
          })}
        >
          <Catalog products={data.products} isLoading={isFetching} length={data.length} />
        </section>
      </div>
      <Pagination
        changePage={(page) => updateQueryParams('page', page.toString())}
        currentPage={queryParams.page}
        numberPages={Math.ceil(data.length / +queryParams.perPage)}
      />
    </div>
  )
}

export default ExplorerPage
