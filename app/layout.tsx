import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Image from 'next/image'
import bwImageMe from "@/public/BW_DAM_ME.jpg"
import Navbar from '@/components/Navbar'
import ToastNotification from '@/components/ToastNotification'
import Providers from './store/Providers'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Kamaleshpathy Portfolio',
  description: 'Portfolio website of Kamaleshpathy',
  openGraph: {
    siteName: 'Kamaleshpathy Portfolio',
    title: 'Kamaleshpathy Portfolio',
    description: 'Portfolio website of Kamaleshpathy',
    url: "https://www.kamaleshpathy.com/",
    images: "/PortfolioSite.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col justify-center items-center relative`}>
        <Providers>
          <div className='absolute inset-0 h-full overflow-hidden blur-3xl -z-10'>
            <Image src={bwImageMe} alt='kamaleshpathy posing near a dam' className='w-full h-1/4 object-cover object-top brightness-50 bg-no-repeat'/>
          </div>
          <Navbar />
          <ToastNotification />
          {children}
        </Providers>
      </body>
    </html>
  )
}
