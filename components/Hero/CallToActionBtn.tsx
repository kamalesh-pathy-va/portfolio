'use client';
import { MessageType, display } from '@/app/store/feature/toast/toastSlice';
import { AppDispatch } from '@/app/store/store';
import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux';

interface callToAction{
  content: string;
  Icon: ReactNode;
  display: string;
}

const CallToActionBtn = (props: callToAction) => {
  const dispatch = useDispatch<AppDispatch>()
  const handleCopyClipboard = () => {
    if (window.isSecureContext){
      navigator.clipboard.writeText("asokankamalesh@gmail.com")
        .then(() => dispatch(display({
          message: 'Email ID copied!',
          messageType: MessageType.SUCCESS,
          visible: true,
        })))
        .catch(() => dispatch(display({
          message: 'Error',
          messageType: MessageType.DANGER,
          visible: true,
        })))
    } else {
      dispatch(display({
        message: 'Mail app redirect...',
        messageType: MessageType.WARNING,
        visible: true,
      }))
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