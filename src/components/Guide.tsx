import React from 'react'
import Image from 'next/image'
import BadgeLabel from '@/components/BadgeLabel'


function Guide() {
  return (
    <div className='w-full bg-background flex flex-col gap-5 justify-center items-center mt-5 px-10 md:px-18 py-4'>
        

       <BadgeLabel text='Master Rajesh Sharma - Vedic Astrologer & Spiritual Guide'/>
        <div className='text-center space-y-4 md:max-w-[520px]'>
            <h1 className='text-3xl font-bold md:text-4xl'>Meet Your <span className='text-primary'>Cosmic Guide</span></h1>
            <p className='text-muted text-sm'>   With over 15 years of experience in Vedic Astrology, I have dedicated my life to helping individuals discover their true potential through the ancient wisdom of the stars. My journey began in the sacred temples of India, where I studied under renowned masters of astrological sciences.</p>
            <div className='flex gap-4 justify-center'>
                <span className='px-3 py-1 text-sm bg-background-secondary text-background-secondary-foreground font-medium rounded'>15+ Years Experience</span>
                <span className='px-3 py-1 text-sm bg-background-tertiary text-background-tertiary-foreground font-medium rounded'>Certified Astrologer</span>
                <span className='px-3 py-1 text-sm bg-background-quaternary text-background-quaternary-foreground font-medium rounded'>Vedic Expert</span>
            </div>
            
    
    </div>
    <div className='flex flex-col  gap-4 w-full justify-around md:px-16 lg:px-18 sm:flex-row'>
            <div className='flex flex-col text center items-center text-2xl'>
                <Image src={'/happyclients.png'} width={80} height={80} alt='happy client'/>
                <span className='text-background-secondary-foreground font-bold'>2000+</span>
                <p className='text-muted text-md sm:text-sm'>Happy Clients Guided</p>
                </div>
            <div className='flex flex-col text center items-center text-2xl'>
                <Image src={'/ratings.png'} width={80} height={80} alt='happy client'/>
                <span className='text-background-tertiary-foreground font-bold'>4.9</span>
                <p className='text-muted text-md sm:text-sm'>Average Rating</p>
                </div>
            <div className='flex flex-col text center items-center text-2xl'>
            <Image src={'/countries.png'} width={80} height={80} alt='happy client'/>
            <span className='text-background-quaternary-foreground font-bold'>25+</span>
                <p className='text-muted text-md sm:text-sm'>Countries Served</p>
            </div>
            </div>
        </div>
  )
}

export default Guide
