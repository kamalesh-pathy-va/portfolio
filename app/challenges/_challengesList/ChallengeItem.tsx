import Link from 'next/link';
import React from 'react'

const ChallengeItem = ({ title, problemID }: { title: string; problemID: string; }) => {
  return (
    <Link href={`/challenges/${problemID}`}
      className='block px-2 py-3 rounded-md hover:bg-neutral-700 transition overflow-hidden'
    >
      <span className='truncate'>{title}</span>
    </Link>
  )
}

export default ChallengeItem