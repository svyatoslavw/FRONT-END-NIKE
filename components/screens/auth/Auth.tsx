'use client'

import { IEmailPassword } from '@/app/store/user/user.interface'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import clsx from 'clsx'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Auth.module.scss'
import { useAuthRedirect } from './useAuthRedirect'

const AuthPage: FC = () => {
  useAuthRedirect()

  const { isLoading } = useAuth()

  const { login, register } = useActions()

  const [type, setType] = useState<'login' | 'register'>('login')
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === 'login') login(data)
    else register(data)

    reset()
  }

  return (
    <div className={styles.login}>
      <section>
        <form onSubmit={handleSubmit(onSubmit)} className={clsx('shadow-xl', styles.form)}>
          <h1 className={styles.type}>{type}</h1>
          <Field
            {...formRegister('email', {
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            placeholder="Email"
            error={errors.email?.message}
            className="w-full"
          />
          <Field
            {...formRegister('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message: 'min 6 characters',
              },
            })}
            placeholder="Password"
            error={errors.password?.message}
            className="w-full"
          />

          <Button className={styles.customBtn}>Next</Button>

          <button
            className={styles.resetBtn}
            type="button"
            onClick={() => {
              setType(type === 'login' ? 'register' : 'login')
              reset()
            }}
          >
            or {type === 'login' ? 'register' : 'login'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default AuthPage
