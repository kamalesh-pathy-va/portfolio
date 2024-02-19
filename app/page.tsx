import Challenges from '@/components/Challenges'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Timeline from '@/components/Timeline'
import Work from '@/components/Work'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Work />
      <Timeline />
      <TechStack />
      <Challenges />
      <Contact />
    </main>
  )
}
