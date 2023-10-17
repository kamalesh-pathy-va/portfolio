import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Image from 'next/image'
import bwImageMe from "@/public/BW_DAM_ME.jpg"

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Kamaleshpathy Portfolio',
  description: 'Portfolio website of Kamaleshpathy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col justify-center items-center relative`}>
        <div className='absolute inset-0 h-full overflow-hidden blur-3xl -z-10'>
          <Image src={bwImageMe} alt='kamaleshpathy posing near a dam' className='w-full h-1/4 object-cover object-top brightness-50 bg-no-repeat'/>
        </div>
        {children}
      </body>
    </html>
  )
}
