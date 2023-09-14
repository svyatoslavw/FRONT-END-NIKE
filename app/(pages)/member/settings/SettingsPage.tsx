'use client'
import ProfileHeader from '@/components/profile-header/ProfileHeader'
import Button from '@/components/ui/button/Button'
import Modal from '@/components/ui/modal/Modal'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import { FC, useState } from 'react'
import EditProfile from './EditProfile'
import Loader from '@/components/ui/loader/Loader'

const SettingsPage: FC = () => {
  const { user } = useAuth()
  const { profile } = useProfile()

  const [isModal, setIsModal] = useState(false)

  return (
    <>
      {!profile ? (
        <Loader />
      ) : (
        <>
          <ProfileHeader />

          <div className="flex flex-col" style={{ margin: '0 30vw' }}>
            <div className="mb-5">
              <h1 className="text-3xl font-medium my-3">Profile Visibility</h1>
              <p className="text-xl">
                On your Nike profile, you provide product reviews and use the Nike app.
              </p>
            </div>

            <div className="block">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-10">
                  <Image
                    src={profile.avatarPath}
                    alt="profile"
                    width={120}
                    height={120}
                    className="rounded-full"
                    priority
                  />

                  <div>
                    <span className="text-xl block">View your profile</span>
                    <span className="text-lg text-gray-500">{profile?.name}</span>
                  </div>
                </div>

                {user && (
                  <Button onClick={() => setIsModal(true)} className="bg-secondary">
                    Edit
                  </Button>
                )}
              </div>
              <hr className="border-b my-8 " />
            </div>

            <div className="mb-5">
              <h1 className="text-3xl font-medium my-3">Product Review Visibility</h1>
              <p className="text-xl">
                Choose your visibility in the Nike product reviews you write. Changing these
                settings will affect your visibility when communicating with friends in the Nike
                Training Club and Nike Run Club apps.
              </p>
            </div>

            {user && (
              <Modal isOpen={isModal} closeModal={() => setIsModal(false)}>
                <EditProfile />
              </Modal>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SettingsPage
