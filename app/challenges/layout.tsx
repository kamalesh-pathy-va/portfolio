import React from 'react'
import ChallengesList from './_challengesList/ChallengesList'

const ChallengesLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex w-full mt-8 h-[calc(100vh-85px)]'>
      <aside className='w-1/4 box-border p-2'>
        <ChallengesList />
      </aside>
      <main className='overflow-y-auto overflow-x-hidden hide-scrollbar w-full box-border my-2 rounded-md'>
        {children}
      </main>
    </div>
  )
}

export default ChallengesLayout