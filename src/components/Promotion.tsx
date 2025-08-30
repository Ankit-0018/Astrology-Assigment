import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Calendar } from 'lucide-react'
import Timer from '@/components/Timer'


const Promotion = () => {
  return (
       <div className='bg-accent-gradient flex flex-col items-center px-10 py-8 md:px-18  my-8'>
        <div className='text-center space-y-4 md:max-w-[520px]'>
            
        <h2 className='font-semibold text-xl'>Join Our Webinar</h2>
        <h1 className='font-bold text-5xl'>Limited <span className='text-cyan-600'>Time Offer</span></h1>
        <p>Get &apos;The Guide&apos; now and enjoy a special one-month free access to our upcoming AI-scoring platform with over 5000 test questions. Act fast – this offer expires in [Countdown Timer]</p>
        </div>
        <Timer />
      <Button size={'lg'} className='w-50'><Calendar /> Visit Now</Button>
    </div>
  )
}

export default Promotion
