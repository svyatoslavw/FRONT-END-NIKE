import { Metadata } from 'next'
import SettingsPage from './SettingsPage'

export const metadata: Metadata = {
  title: 'Settings | Nike',
}

export default function Settings() {
  return <SettingsPage />
}
