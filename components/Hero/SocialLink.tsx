import Link from 'next/link'
import React, { ReactNode } from 'react'

interface socialLink {
  url: string;
  Icon: ReactNode;
}

const SocialLink = (props: socialLink) => {
  return (
    <Link href={props.url}
      className='p-2 text-xl lg:text-2xl bg-neutral-900 rounded-md
      hover:text-neutral-700 hover:bg-neutral-200 transition'
      target='_blank'
    >
      {props.Icon}
    </Link>
  )
}

export default SocialLink