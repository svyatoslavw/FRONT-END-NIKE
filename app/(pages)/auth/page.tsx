import AuthPage from '@/components/screens/auth/Auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth | Nike',
}

export default function Auth() {
  return <AuthPage />
}
