import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/navbar/Navbar'
import ClientOnly from '@/components/ClientOnly'
import Modal from '@/components/modals/Modal'
import RegisterModal from '@/components/modals/RegisterModal'
import LoginModal from '@/components/modals/LoginModal'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './Actions/getCurrentUser'
import RentModal from '@/components/modals/RentModal'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Inter({
  subsets: ['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}</body>
    </html>
  )
}
