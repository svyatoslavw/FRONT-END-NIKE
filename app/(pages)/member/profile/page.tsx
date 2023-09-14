import { Metadata } from 'next'
import ProfilePage from './ProfilePage'

export const metadata: Metadata = {
  title: 'My profile | Nike',
}

export default async function Page() {
  return <ProfilePage />
}
