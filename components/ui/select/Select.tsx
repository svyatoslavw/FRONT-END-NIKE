import clsx from 'clsx'
import { useState } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'
import styles from './Select.module.scss'
import { ISelect } from './select.intercafe'

function Select<K>({ data, onChange, value, title }: ISelect<K>) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.select}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title && <b>{title}: </b>}
        {value?.label || 'Default'}
        <BsFillCaretDownFill />
      </button>
      {isOpen && (
        <ul>
          {data.map((item) => (
            <li
              key={item.key?.toString()}
              className={clsx({ [styles.active]: item.key === value?.key })}
            >
              <button
                onClick={() => {
                  onChange(item)
                  setIsOpen(false)
                }}
                disabled={item.key === value?.key}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
