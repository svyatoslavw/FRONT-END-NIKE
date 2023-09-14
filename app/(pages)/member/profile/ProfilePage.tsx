'use client'
import ProfileHeader from '@/components/profile-header/ProfileHeader'
import Loader from '@/components/ui/loader/Loader'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import { FC } from 'react'
import FavoritesPage from './FavoritesPage'

const ProfilePage: FC = () => {
  const { profile } = useProfile()

  return (
    <div>
      {!profile ? (
        <Loader />
      ) : (
        <>
          <ProfileHeader />
          <div>
            <div className="flex px-5 py-2 items-center gap-5">
              <Image
                src={profile?.avatarPath}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full"
                priority
              />
              <div className="block">
                <span className="text-4xl block">{profile?.name}</span>
                <span className="text-lg text-gray-500">
                  Nike Community Member since{' '}
                  {new Date(profile.createdAt).toLocaleString('en-En', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </span>
              </div>
            </div>
          </div>
          <FavoritesPage />
        </>
      )}
    </div>
  )
}

export default ProfilePage
