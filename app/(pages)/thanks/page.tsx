import { Metadata } from 'next'
import ThanksPage from './Thanks'

export const metadata: Metadata = {
  title: 'Thanks | Nike',
}

export default async function Thanks() {
  return <ThanksPage />
}
