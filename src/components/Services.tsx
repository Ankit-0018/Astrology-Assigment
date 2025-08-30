import React from 'react'
import BadgeLabel from './BadgeLabel'
import ServiceCardSection from './ServiceCardSection'

function Services() {
  return (
    <div className='bg-accent-gradient flex flex-col items-center px-10 md:px-18  pt-4'>
        <BadgeLabel text='Astrological Services' />
   <div className='text-center space-y-4 md:max-w-[520px]'>

        <h1  className='text-3xl font-bold md:text-4xl'>Comprehensive <span className='text-primary'>Cosmic Services</span></h1>
        <p className='text-muted text-sm'>Discover a wide range of astrological services designed to illuminate your path, enhance your well-being, and guide you towards your highest potential.</p>
        </div>
        <ServiceCardSection />
      
    </div>
  )
}

export default Services
