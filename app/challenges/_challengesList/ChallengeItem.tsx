import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react'

const ChallengeItem = ({ title, problemID, toggle }: { title: string; problemID: string; toggle: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Link href={`/challenges/${problemID}`}
      className='block px-2 py-2 mb-1 rounded-md bg-neutral-700 hover:bg-neutral-700/50 transition overflow-hidden truncate'
      onClick={() => toggle(prev => !prev)}
    >
      <span>{title}</span>
    </Link>
  )
}

export default ChallengeItem