import Image from 'next/image'
import React from 'react'

import profileImg from "@/public/Profile.jpg"
import Link from 'next/link'
import { BiArrowBack, BiLinkExternal } from 'react-icons/bi'

const About = () => {
  return (
    <section className='w-11/12 md:w-auto md:mx-10 mt-8 md:h-[85vh] mb-5 flex'>
      <div className='w-1/3 h-full hidden md:block'>
        <Image src={profileImg} alt='kamaleshpathy posing near a dam'
          className='h-full object-cover object-top'
        />
      </div>
      <div className='px-5 md:px-10 py-5 bg-neutral-800 w-full md:w-2/3 flex flex-col gap-2 overflow-y-auto hide-scrollbar'>
        <h2 className='text-3xl font-bold'>About</h2>
        <p className='text-base md:text-lg leading-7 md:leading-8'>
          Hello, I&apos;am Kamaleshpathy from <strong>Chennai, India</strong> 📍. I&apos;ve a Bachelor of Engineering degree in <strong>Electronics and Communication</strong>.
          I&apos;m very passionate about <strong>programming, computers</strong> 💻 and <strong>networks</strong>.
        </p>
        <p className='text-base md:text-lg leading-7 md:leading-8'>
          I enjoy coding, solving programming problems and in my free time I love to experiment with new technology and understand them.
          I like listening to music, play Rubix cube and enjoy cricket 🏏.
        </p>
        <p className='text-base md:text-lg leading-7 md:leading-8'>
          I use <strong>Linux</strong>, Ubuntu to be specific, the power of doing things on the <strong>terminal</strong> 🤩.
          I use <strong>oh my zsh</strong> for terminal.
        </p>
        <p className='text-base md:text-lg leading-7 md:leading-8'>
          <span>If you are intrested in looking at my problem solving skills, have a look at</span>
          <Link className='group font-bold flex items-center gap-2 hover:text-green-500 transition' href={"https://leetcode.com/asokankamalesh/"} target='_blank'>
            <span className='relative'>
              <span>Leetcode</span>
              <span className='h-0.5 w-full absolute bg-neutral-100 group-hover:bg-green-500 bottom-0 left-0'></span>
            </span>
            <span className='opacity-0 group-hover:opacity-100 transition-opacity'><BiLinkExternal /></span>
          </Link>
          <Link className='group font-bold flex items-center gap-2 hover:text-green-500 transition' href={"https://github.com/kamalesh-pathy-va/coding-questions"} target='_blank'>
            <span className='relative'>
              <span>Github</span>
              <span className='h-0.5 w-full absolute bg-neutral-100 group-hover:bg-green-500 bottom-0 left-0'></span>
            </span>
            <span className='opacity-0 group-hover:opacity-100 transition-opacity'><BiLinkExternal /></span>
          </Link>
        </p>
        <h2 className='text-3xl font-bold mt-4'>TL;DR</h2>
        <p className='text-base md:text-lg leading-7 md:leading-8'>
          <strong>Kamaleshpathy B.E. ECE</strong> from <strong>Chennai, India</strong>
        </p>
        <p className='text-base md:text-lg leading-7 md:leading-8'>
          <strong>Programming, Computers, Networks</strong>
        </p>
        <p className='text-base md:text-lg leading-7 md:leading-8'>
          <strong>Linux (Ubuntu)</strong>
        </p>
        <p className='text-base md:text-lg self-end'>
          <Link className='group font-bold flex items-center gap-2 hover:text-neutral-300 transition' href={"/"}>
            <span><BiArrowBack /></span>
            <span className='relative'>
              <span>Back</span>
              <span className='h-0.5 w-full absolute bg-neutral-100 group-hover:bg-neutral-300 bottom-0 left-0'></span>
            </span>
          </Link>
        </p>
      </div>
    </section>
  )
}

export default About