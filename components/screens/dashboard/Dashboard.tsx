'use client'
import Loader from '@/components/ui/loader/Loader'
import { StatisticsService } from '@/services/statistics.service'
import { convertCurrency } from '@/utils/convert-currency'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Dashboard.module.scss'

const Dashboard: FC = () => {
  const { data, isFetching } = useQuery(['statistics'], () => StatisticsService.getMain(), {
    select: ({ data }) => data,
  })

  return (
    <>
      <div className={styles.heading}>
        <Image src={'/nike.jpg'} width={100} height={100} alt="nike" />
        Admin Panel
      </div>
      {isFetching ? (
        <Loader />
      ) : data?.length ? (
        <div className={styles.wrapper}>
          {data.map((item, index) => (
            <div key={item.name} className={clsx(styles.item, styles.color)}>
              <div>{item.name}</div>
              <div className="text-[#494949]">
                {index === data.length - 1 ? convertCurrency(item.value || 0) : item.value}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Статистика не загружена</div>
      )}
    </>
  )
}

export default Dashboard
