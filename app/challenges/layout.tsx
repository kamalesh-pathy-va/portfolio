import React from 'react'
import ChallengesList from './_challengesList/ChallengesList'

const ChallengesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col md:flex-row w-full mt-8 md:h-[calc(100vh-85px)] overscroll-auto'>
      <aside className='w-full md:w-1/3 lg:w-1/4 box-border p-2'>
        <ChallengesList />
      </aside>
      <main className='overflow-y-auto overflow-x-hidden hide-scrollbar w-full box-border my-2 rounded-md'>
        {children}
      </main>
    </div>
  )
}

export default ChallengesLayout