'use client';

import React, { useState } from 'react'
import { Mrs_Sheppards } from 'next/font/google'
import Link from 'next/link'
import NavLink from './NavLink'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const mrs_sheppards = Mrs_Sheppards({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
})

const Navbar = () => {
  const links = [
    {
      url: "/#work",
      text: "Work"
    },
    {
      url: "/#tech",
      text: "Tech"
    },
    {
      url: "/#contact",
      text: "Contact"
    },
    {
      url: "/challenges/3d2e499c-b0ae-46d1-9873-a129599b4fc2",
      text: "Challenges"
    },
    {
      url: "/about",
      text: "About"
    },
  ]

  const [toggleNav, setToggleNav] = useState(false)

  return (
    <nav className='sticky top-2 md:top-4 z-50 bg-neutral-100/60 backdrop-blur-3xl text-neutral-900 p-1 w-[95vw] md:w-fit rounded-md flex gap-4 justify-between md:justify-normal'>
      <Link href={"/"} className='py-1 px-3 rounded-md bg-neutral-800'>
        <span className={`${mrs_sheppards.className} text-3xl text-neutral-200`}>Kamaleshpathy</span>
      </Link>
      <ul className={`${toggleNav? 'block' : 'hidden'} md:flex gap-4 absolute top-full left-0 w-[95vw] md:w-auto md:static bg-neutral-400 md:bg-transparent rounded-md md:rounded-none translate-y-2 md:translate-y-0 md:mr-4`}>
        {
          links.map((linkItem, index) => <NavLink url={linkItem.url} text={linkItem.text} key={index} togglenav={setToggleNav} />)
        }
      </ul>
      <button className='md:hidden text-3xl px-2' onClick={() => setToggleNav(prev => !prev)}>
        {toggleNav ? <AiOutlineClose /> : <BiMenu />}
      </button>
    </nav>
  )
}

export default Navbar