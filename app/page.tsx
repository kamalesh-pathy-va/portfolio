import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Work />
    </main>
  )
}
