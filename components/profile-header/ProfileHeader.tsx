'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const ProfileHeader: FC = () => {
  const pathname = usePathname()

  return (
    <div className="flex my-5 text-lg gap-7 w-full justify-center">
      <Link
        href={'/member/profile'}
        className={pathname === '/member/profile' ? 'text-gray-500' : ''}
      >
        Profile
      </Link>
      <Link
        href={'/member/orders'}
        className={pathname === '/member/orders' ? 'text-gray-500' : ''}
      >
        Orders
      </Link>
      <Link href={'/'} className={pathname === '/member/favorites' ? 'text-gray-500' : ''}>
        Favorites
      </Link>
      <Link
        href={'/member/settings'}
        className={pathname === '/member/settings' ? 'text-gray-500' : ''}
      >
        Settings
      </Link>
    </div>
  )
}

export default ProfileHeader
