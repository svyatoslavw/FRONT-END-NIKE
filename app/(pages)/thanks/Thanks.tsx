'use client'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

const ThanksPage: FC = () => {
  const { push } = useRouter()

  useEffect(() => {
    setTimeout(() => {
      push('/')
    }, 3000)
  }, [])

  return (
    <div className="flex justify-center">
      <h1 className="text-7xl font-semibold">Thanks!</h1>
    </div>
  )
}

export default ThanksPage
