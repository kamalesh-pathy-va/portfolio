'use client';
import React from 'react'

interface mouse {
  x: number;
  y: number;
  left: number;
  top: number;
}

const HoverInfo = (props: { description: string, title: string, mousePosition: mouse }) => {
  return (
    <div className='absolute pointer-events-none z-10 left-full opacity-0 backdrop-blur-xl border-t border-neutral-500/70 border-l overflow-hidden h-3/4 text-sm text-white bg-neutral-900/70 p-2 flex flex-col justify-between rounded-md w-52 lg:group-hover:opacity-100 transition-opacity'
      style={{
        top: props.mousePosition.y - props.mousePosition.top + 10,
        left: props.mousePosition.x - props.mousePosition.left + 10
      }}
    >
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <span className='line-clamp-6'>{props.description}</span>
      </div>
    </div>
  )
}

export default HoverInfo