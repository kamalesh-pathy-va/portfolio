'use client';
import React, { ReactNode } from 'react'

interface callToAction{
  content: string;
  Icon: ReactNode;
  display: string;
}

const CallToActionBtn = (props: callToAction) => {
  const handleCopyClipboard = () => {
    if (window.isSecureContext){
      navigator.clipboard.writeText("asokankamalesh@gmail.com")
        .then(() => alert("Email ID copied to clipboard"))
        .catch(() => alert("Error"))
    } else {
      window.location.href = "mailto:" + props.content;
    }
  }

  return (
    <button onClick={handleCopyClipboard}
      className='flex items-center justify-center gap-2
      w-full p-2 lg:p-4 bg-neutral-900 rounded-md
      overflow-hidden hover:bg-neutral-200 hover:text-neutral-800 transition'
    >
      <span className='text-xl lg:text-2xl'>{props.Icon}</span>
      <span className='text-sm lg:text-base'>{props.display}</span>
    </button>
  )
}

export default CallToActionBtn