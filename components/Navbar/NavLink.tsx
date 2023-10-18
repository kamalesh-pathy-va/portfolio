import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface navLink {
  url: string;
  text: string;
  togglenav: Dispatch<SetStateAction<boolean>>;
}

const NavLink = (props: navLink) => {
  return (
    <li className='py-3 md:py-1 px-2 rounded-md flex justify-center items-center font-bold hover:text-neutral-700 transition'>
      <Link href={props.url}
        onClick={() => props.togglenav(prev => !prev)}
      >
        {props.text}
      </Link>
    </li>
  )
}

export default NavLink