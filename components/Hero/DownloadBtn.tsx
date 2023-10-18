'use client';

import { BiSolidFilePdf } from 'react-icons/bi'

const DownloadBtn = () => {
  const hanndleDownload = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ResumeKamaleshPathyVA_Updated_3.pdf"
    }
  }

  return (
    <button onClick={hanndleDownload}
      className='flex items-center justify-center gap-2 w-full
      p-2 lg:p-4 bg-neutral-900 rounded-md hover:bg-neutral-200
      hover:text-neutral-800 transition'>
      <span className='text-xl lg:text-2xl'><BiSolidFilePdf /></span>
      <span className='text-sm lg:text-base'>Download CV</span>
    </button>
  )
}

export default DownloadBtn