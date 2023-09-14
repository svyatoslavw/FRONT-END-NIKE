import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Checkbox.module.scss'

interface ICheckbox {
  isChecked: boolean
  onClick: () => void
  className?: string
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
  isChecked,
  onClick,
  className,
  children,
}) => {
  return (
    <button className={clsx(styles.checkbox, className)} onClick={onClick}>
      <span className={clsx({ [styles.active]: isChecked })} />
      <span>{children}</span>
    </button>
  )
}

export default Checkbox
