'use client'
import { IFullUser } from '@/types/user.interface'
import Image from 'next/image'
import { FC } from 'react'
import FavoritesPage from '../../member/profile/FavoritesPage'

interface IUserPage {
  user: IFullUser
}

const UserPage: FC<IUserPage> = ({ user }) => {
  return (
    <>
      <div>
        <div className="flex px-5 py-2 items-center gap-5">
          <Image
            src={user.avatarPath}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full"
            priority
          />
          <div className="block">
            <span className="text-4xl block">{user.name}</span>
            <span className="text-lg text-gray-500">
              Nike Community Member since{' '}
              {new Date(user.createdAt).toLocaleString('en-En', {
                year: 'numeric',
                month: 'long',
              })}
            </span>
          </div>
        </div>
      </div>

      <FavoritesPage user={user} />
    </>
  )
}

export default UserPage
