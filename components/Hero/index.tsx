import Image from 'next/image'
import React from 'react'
import profileImg from "@/public/Profile.jpg"
import DownloadBtn from './DownloadBtn'
import CallToActionBtn from './CallToActionBtn'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoReddit } from 'react-icons/bi'
import { RiTwitterXFill } from 'react-icons/ri'
import SocialLink from './SocialLink'

const Hero = () => {
  const socialMedia = [
    {
      url: "https://www.linkedin.com/in/kamalesh-pathy-va/",
      Icon: <BiLogoLinkedin />
    }, 
    {
      url: "https://github.com/kamalesh-pathy-va",
      Icon: <BiLogoGithub />
    },
    {
      url: "https://twitter.com/kamaleshpathyVA",
      Icon: <RiTwitterXFill />
    },
    {
      url: "https://www.reddit.com/user/kamalesh_pathy2610",
      Icon: <BiLogoReddit />
    },
    {
      url: "https://www.instagram.com/kamaleshpathy/",
      Icon: <BiLogoInstagram />
    }
  ]
  return (
    <section className='w-full relative mb-8 md:mb-24 mt-8 md:mt-24 '>
      <div className='flex flex-col justify-center items-center gap-4'>
        <div className='flex gap-2 md:gap-4 xl:gap                      -10 flex-col w-3/4 sm:w-1/2 md:w-3/4 xl:w-3/5 items-center bg-neutral-800/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 rounded-md border-t border-neutral-500/70 border-l md:border-none'>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-10 justify-center items-center'>
            <Image src={profileImg} alt='kamaleshpathy posing near a dam' className='w-full md:w-48 lg:w-72 xl:w-auto max-w-[20rem] rounded-md aspect-square object-cover grayscale hover:grayscale-0 transition' />
            <span className='text-xl md:text-4xl lg:text-5xl text-center md:text-left xl:h-full'>
              Hello, I&apos;m <span className='font-bold'>Kamaleshpathy</span>, an aspiring software developer.
            </span>
          </div>

          <div className='flex flex-col md:flex-row gap-2 w-full'>
            <CallToActionBtn Icon={<AiOutlineMail />} content="asokankamalesh@gmail.com" display='E-Mail' />
            <DownloadBtn />
          </div>
        </div>

        <div className='w-3/4 sm:w-1/2 md:w-3/4 flex gap-4 justify-between md:justify-center'>
          {
            socialMedia.map((item, index) => {
              return (
                <SocialLink
                  url={item.url}
                  Icon={item.Icon}
                  key={index}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Hero