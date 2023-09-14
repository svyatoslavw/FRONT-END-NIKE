'use client'
import { getAdminUrl } from '@/config/url.config'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'

import NavLink from './NavLink'

import { FaComments, FaTshirt, FaUser } from 'react-icons/fa'
import { FaArrowRotateRight, FaCartShopping } from 'react-icons/fa6'

import clsx from 'clsx'
import { HiAdjustments } from 'react-icons/hi'

const Navbar = () => {
  const { isAdminPanel } = useIsAdminPanel()
  const { user } = useAuth()

  return (
    <div className={clsx(styles.navbar)}>
      <div>
        {isAdminPanel ? (
          <Link rel="preload" href={'/admin'} className="no-underline">
            <h1 className={styles.textLogo}>Admin</h1>
          </Link>
        ) : (
          <>
            <Link rel="preload" href={'/'}>
              <Image src="/logo1.png" alt="Logo2" width={54} height={54} className={styles.logo} />
            </Link>
          </>
        )}

        <div className={styles.adminMenu}>
          <NavLink href={getAdminUrl('/')} icon={HiAdjustments} text="Dashboard" />
          <NavLink href={getAdminUrl('/products')} icon={FaTshirt} text="Products" />
          <NavLink href={getAdminUrl('/users')} icon={FaUser} text="Users" />
          <NavLink href={getAdminUrl('/orders')} icon={FaCartShopping} text="Orders" />
          <NavLink href={getAdminUrl('/reviews')} icon={FaComments} text="Reviews" />
          <NavLink href={'/'} icon={FaArrowRotateRight} text="Back to site" />
          <Image
            src="/nike2.png"
            alt="nike"
            width={100}
            height={100}
            draggable={false}
            className={styles.logo2}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
