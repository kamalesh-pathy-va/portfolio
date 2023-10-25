'use client';

import { MessageType, display } from '@/app/store/feature/toast/toastSlice';
import { AppDispatch } from '@/app/store/store';
import { BiSolidFilePdf } from 'react-icons/bi'
import { useDispatch } from 'react-redux';

const DownloadBtn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDownload = () => {
    if (typeof window !== "undefined") {
      dispatch(display({
        message: 'Downloading...',
        messageType: MessageType.SUCCESS,
        visible: true,
      }))
      window.location.href = "./ResumeKamaleshPathyVA_Updated_4 .pdf"
    }
  }

  return (
    <button onClick={handleDownload}
      className='flex items-center justify-center gap-2 w-full
      p-2 lg:p-4 bg-neutral-900 rounded-md hover:bg-neutral-200
      hover:text-neutral-800 transition'>
      <span className='text-xl lg:text-2xl'><BiSolidFilePdf /></span>
      <span className='text-sm lg:text-base'>Download CV</span>
    </button>
  )
}

export default DownloadBtn