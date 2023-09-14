'use client'
import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './Field.module.scss'
import { IField } from './field.unterface'

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, className, type = 'text', style, Icon, ...rest }, ref) => {
    return (
      <div className={className} style={style}>
        <label>
          <span className={styles.icon}>
            {Icon && <Icon className="mr-3" />}
            {placeholder}
          </span>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...rest}
            className={clsx(styles.field, { 'border-primary appearance-none': !!error })}
          />
        </label>
        {error && <div className="text-primary">{error}</div>}
      </div>
    )
  },
)

Field.displayName = 'Field'

export default Field
