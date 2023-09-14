import Navbar from '@/components/navbar/Navbar'
import Dashboard from '@/components/screens/dashboard/Dashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Nike',
}

export default function Admin() {
  return (
    <div>
      <Navbar />
      <div className="mx-80 my-10">
        <Dashboard />
      </div>
    </div>
  )
}
