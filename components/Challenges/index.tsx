import Link from 'next/link'
import React from 'react'
import ChallengeTable from './ChallengeTable'
import { BiRightArrowAlt } from 'react-icons/bi';

const Challenges = () => {
  return (
    <section className='w-11/12 md:w-3/4 mx-auto mb-24' id='challenges'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold mb-2'>Challenges</h2>
        <Link href={'/challenges/3d2e499c-b0ae-46d1-9873-a129599b4fc2'} className='font-bold text-sm text-neutral-400 hover:text-neutral-300 flex gap-1 items-center transition'>
          <span>View all</span>
          <span className='text-xl'><BiRightArrowAlt /></span>
        </Link>
      </div>
      <ChallengeTable />
    </section>
  )
}

export default Challenges