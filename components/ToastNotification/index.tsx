'use client';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, type RootState } from '@/app/store/store';
import { useEffect } from "react";
import { MessageType, hide } from "@/app/store/feature/toast/toastSlice";
import { BiCheckCircle } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineWarning } from "react-icons/ai";

const ToastNotification = () => {
  const toast = useSelector((state: RootState) => state.toast)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hide())
    }, 5000)

    return () => clearTimeout(timer);
  }, [toast.visible, dispatch]);

  return (
    <div className={`fixed z-50 top-[80vh] md:top-[85vh] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2  bg-neutral-50/70  text-neutral-900 font-bold py-2 px-4 rounded-md backdrop-blur-3xl transition-opacity delay-0 duration-300
     ${toast.visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} 
     ${toast.messageType === MessageType.SUCCESS && 'bg-green-200/70'}
     ${toast.messageType === MessageType.WARNING && 'bg-yellow-100/70'}
     ${toast.messageType===MessageType.DANGER && 'bg-red-300/70'}
     `}>
      {toast.messageType === MessageType.SUCCESS &&
        <span className="text-2xl"><BiCheckCircle /></span>
      }
      {toast.messageType === MessageType.WARNING &&
        <span className="text-xl"><AiOutlineWarning /></span>
      }
      {toast.messageType === MessageType.DANGER &&
        <span className="text-xl"><AiOutlineCloseCircle /></span>
      }
      {toast.message}
    </div>
  )
}

export default ToastNotification