import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Work from '@/components/Work'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Work />
      <TechStack />
    </main>
  )
}
