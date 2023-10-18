"use client";

import Image, { StaticImageData } from 'next/image'
import darkLinkText from '@/public/linkWhite.svg'
import { BiLinkExternal } from 'react-icons/bi'
import TechChips from './TechChips';
import HoverInfo from './HoverInfo';
import { useRef, useState } from 'react'
import Link from 'next/link'


interface CardProps {
  key: number;
  title: string;
  techIcon: any[];
  techName: string[];
  imagePath: string | StaticImageData;
  demoURL: string;
  description: string;
}

const DisplayCard = (props: CardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, left: 0, top: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const {left, top} = cardRef.current?.getBoundingClientRect() as DOMRect
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
      left,
      top,
    });
  }
  

  return (
    <div className='w-full relative group flex-grow card' onMouseMove={handleMouseMove} ref={cardRef}>
      <div className='overflow-hidden rounded-md group-hover:rounded-b-none group-hover:rounded-r-none'>
        <Image src={props.imagePath} alt={props.description} className='scale-110 object-cover w-full aspect-video group-hover:scale-100 transition-all delay-75' />
      </div>
      
      <div className='absolute bottom-0 backdrop-blur-sm bg-gradient-to-t from-neutral-900 w-full px-3 py-2 flex justify-between items-center group-hover:translate-y-full group-hover:bg-neutral-800 transition-all delay-100 rounded-b-md'>
        <div className='flex flex-col gap-2'>
          <span className='text-neutral-100 font-bold text-xl'>{props.title}</span>

          <div className='flex gap-2'>
            {
              props.techIcon.map((TIcon, index) => <TechChips name={props.techName[index]} icon={TIcon} key={index} /> )
            }
          </div>
        </div>

        <Link href={props.demoURL} className='aspect-square relative flex items-center justify-center hover:scale-110 transition-all delay-100'>
          <Image src={darkLinkText} alt='' width={60} className='rotate' />
          <span className='text-neutral-100 absolute'>
            <BiLinkExternal />
          </span>
        </Link>
      </div>

      <HoverInfo description={props.description} title={props.title} mousePosition={mousePosition} />
    </div>
  )
}

export default DisplayCard