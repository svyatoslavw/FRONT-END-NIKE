'use client'
import ProfileHeader from '@/components/profile-header/ProfileHeader'
import { useProfile } from '@/hooks/useProfile'
import { OrderService } from '@/services/order/order.service'
import { convertCurrency } from '@/utils/convert-currency'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FC } from 'react'

const OrdersPage: FC = () => {
  const { profile } = useProfile()

  const { data: orders } = useQuery(['my orders'], () => OrderService.getByUserId(profile?.id), {
    select: ({ data }) => data,
  })

  const loaderProp = ({ src }: any) => {
    return src
  }
  return (
    <>
      <ProfileHeader />
      <div className="flex justify-center">
        <div style={{ width: 1700 }} className="flex-wrap">
          {orders && orders.length ? (
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-secondary flex gap-10 rounded-lg  p-2 my-5 items-center text-lg"
              >
                <span>#{order.id}</span>
                <span className="flex gap-3">
                  {order.items.map((item) => (
                    <div className="">
                      <Image
                        loader={loaderProp}
                        src={item.product.images[0]}
                        width={120}
                        height={120}
                        alt="image"
                        className="object-cover h-[120px] w-[120px]"
                      />
                      <span className="text-xs">{item.product.name}</span>
                    </div>
                  ))}
                </span>
                <span>{order.status}</span>
                <span>{new Date(order.createdAt).toLocaleDateString('ru-Ru')}</span>
                <span>{convertCurrency(order.total)}</span>
              </div>
            ))
          ) : (
            <div>Orders not found</div>
          )}
        </div>
      </div>
    </>
  )
}

export default OrdersPage
