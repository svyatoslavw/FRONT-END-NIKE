'use client'
import { useFilter } from '@/app/(pages)/catalog/useFilters'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useProfile } from '@/hooks/useProfile'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { BiHeart } from 'react-icons/bi'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { LuUser } from 'react-icons/lu'

import Cart from '../cart/Cart'
import SimpleSlider from '../slider/Slider'
import Search from '../ui/search/Search'
import styles from './Header.module.scss'

const Header = () => {
  const { user } = useAuth()
  const { profile } = useProfile()
  const { queryParams, updateQueryParams } = useFilter()

  const { isAdminPanel } = useIsAdminPanel()

  return (
    <main className="mb-9">
      <section className={styles.containerTop}>
        <Image
          src="/logo.png"
          alt="vector"
          width={20}
          height={20}
          draggable={false}
          className="object-cover h-[20px] pointer-events-none"
        />
        <div className="flex space-x-1">
          <Link className={styles.link} href={'/'}>
            Find a Store
          </Link>
          <div className={styles.linkLine}></div>
          <Link className={styles.link} href={'/'}>
            Help
          </Link>
          <div className={styles.linkLine}></div>
          <Link className={styles.link} href={'/'}>
            Join Us
          </Link>
          <div className={styles.linkLine}></div>
          {user ? (
            <Link className={clsx(styles.link, 'gap-1 flex')} href="/member/profile">
              Hi, {profile?.name} <LuUser size={20} />
            </Link>
          ) : (
            <Link className={styles.link} href="/auth">
              Sign In
            </Link>
          )}
        </div>
      </section>

      <section className={styles.containerBottom}>
        <Link href={'/'} draggable={false}>
          <Image
            src="/nike.jpg"
            alt="vector"
            width={100}
            height={100}
            className="object-cover h-[60px] pointer-events-none"
            draggable={false}
          />
        </Link>
        <div className={styles.menu}>
          <Link className={styles.link2} href={'/'}>
            News & Featured
          </Link>
          <Link
            onClick={() => updateQueryParams('genderId', '1')}
            className={styles.link2}
            href={'/catalog'}
          >
            Men
          </Link>
          <Link
            onClick={() => updateQueryParams('genderId', '2')}
            className={styles.link2}
            href={'/catalog'}
          >
            Women
          </Link>
          <Link
            onClick={() => updateQueryParams('genderId', '3')}
            className={styles.link2}
            href={'/catalog'}
          >
            Kids
          </Link>
          <Link className={styles.link2} href={'/catalog'}>
            Catalog
          </Link>
          <Link className={styles.link2} href={'/'}>
            Sale
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Search />

          {user && user?.isAdmin && !isAdminPanel && (
            <Link href={'/admin'} className={styles.link3}>
              <HiOutlineShieldCheck size={24} />
            </Link>
          )}

          <Link href={'/member/profile'} className={styles.link3}>
            <BiHeart size={24} />
          </Link>
          <Cart />
        </div>
      </section>

      <section className={styles.carousel}>
        <SimpleSlider />
      </section>
    </main>
  )
}

export default Header
