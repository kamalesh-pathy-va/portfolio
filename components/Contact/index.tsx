import React from 'react'
import emailIlustration from '@/public/EmailIllustration.svg'
import Image from 'next/image'
import FormComponent from './FormComponent'


const Contact = () => {
  return (
    <section className={`mb-24 w-full bg-cover bgMove`} id='contact'>
      <div className='w-11/12 md:w-3/4 mx-auto py-12 flex justify-around items-center'>
        <div className='hidden md:block'>
          <Image src={emailIlustration} alt='An illustration of email' className='object-cover w-full aspect-square' />
        </div>

        <div className='w-11/12 md:w-3/4 lg:w-1/2'>
          <h2 className='text-3xl font-bold mb-4'>Contact</h2>
          <FormComponent />
        </div>
      </div>
    </section>
  )
}

export default Contact