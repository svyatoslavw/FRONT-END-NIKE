'use client'
import ProductItem from '@/components/screens/catalog/ProductItem'
import { useProfile } from '@/hooks/useProfile'
import { IFullUser } from '@/types/user.interface'
import { FC } from 'react'

interface FavoritesPage {
  user?: IFullUser
}

const FavoritesPage: FC<FavoritesPage> = ({ user }) => {
  const { profile } = useProfile()

  return (
    <div className="my-9">
      <h1 className="text-3xl p-2">Favorites products</h1>
      <hr className="border-b my-5 " />
      {user ? (
        user.privacy === 'PRIVATE' ? (
          <h1 className="text-4xl text-center mt-20">This user has hidden their favorites</h1>
        ) : (
          <div className=" mt-10 grid grid-cols-4 gap-10">
            {user.favorites.map((product) => (
              <ProductItem key={product.product.id} product={product.product} />
            ))}
          </div>
        )
      ) : (
        <div className=" mt-10 grid grid-cols-4 gap-10">
          {profile?.favorites.map((product) => (
            <ProductItem key={product.product.id} product={product.product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
