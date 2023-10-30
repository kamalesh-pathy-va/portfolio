'use client';

import React, { useEffect, useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store/store';
import { MessageType, display } from '@/app/store/feature/toast/toastSlice';
import { trpc } from '@/app/_trpc/client';

const FormComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactSubmit = trpc.contactSubmit.useMutation();

  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  )
  const [successSend, setSuccessSend] = useState(false)
  const [progress, setProgress] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setProgress(true);

      const response = await contactSubmit.mutateAsync(formData);
      if (response.status === 'success') {
        setSuccessSend(true);
        dispatch(display({
          message: 'Message sent!',
          messageType: MessageType.SUCCESS,
          visible: true,
        }))
        setFormData(
          {
            name: '',
            email: '',
            message: ''
          }
        )
      }
    } catch (error) {
      console.log(error);
      dispatch(display({
        message: 'Failed to send',
        messageType: MessageType.DANGER,
        visible: true,
      }))
    } finally {
      setProgress(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setSuccessSend(false);
    }, 5000);
  }, [successSend]);

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='font-bold text-lg'>Name</label>
        <input type="text" id='name'
          className='p-2 outline-none bg-neutral-400/50 rounded-md text-lg placeholder:text-neutral-300'
          placeholder="What's your name"
          required
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          value={formData.name}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='font-bold text-lg'>E-mail</label>
        <input type="email" id="email"
          className='p-2 outline-none bg-neutral-400/50 rounded-md text-lg placeholder:text-neutral-300'
          placeholder='And your e-mail'
          required
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          value={formData.email}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="message" className='font-bold text-lg'>Message</label>
        <textarea id="message" cols={30} rows={7}
          className='p-2 outline-none bg-neutral-400/50 rounded-md text-lg placeholder:text-neutral-300'
          placeholder='Leave me a message'
          required
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
          value={formData.message}
        ></textarea>
      </div>

      <button type="submit"
        className='self-end bg-neutral-300 text-neutral-800 p-3 rounded-md font-bold text-sm flex items-center justify-center gap-2
        hover:bg-neutral-700 hover:text-neutral-200 transition sendBtn'
        disabled={progress}
      >
        <span>{progress ? 'Sending...' : 'Send message'}</span>
        {!progress &&
          <span className='text-lg iconMove overflow-hidden'><span className=''><BiSend /></span></span>
        }
      </button>
    </form>
  )
}

export default FormComponent