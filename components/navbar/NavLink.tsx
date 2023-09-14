import Link from 'next/link'
import { FC } from 'react'
import styles from './Navbar.module.scss'
import { INavLink } from './nav-link.interface'

const NavLink: FC<INavLink> = ({ href, icon: Icon, text }) => {
  return (
    <Link rel="preload" href={href} className={styles.navlink} style={{ color: 'white' }}>
      <span>
        <Icon className={styles.icon} size={50} color="black" />
      </span>
      <span className={styles.text}>{text}</span>
    </Link>
  )
}

export default NavLink
