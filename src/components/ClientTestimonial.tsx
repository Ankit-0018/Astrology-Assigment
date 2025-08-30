import React from 'react'
import BadgeLabel from './BadgeLabel'
import Corousal from './Corousal'


const ClientTestimonial = () => {
  return (
    <div className='w-full bg-background flex flex-col gap-5 items-center px-10 md:px-18 py-8 '>
        
        <BadgeLabel text='Client Testimonial'/>
  <div className='text-center space-y-4 md:max-w-[520px]'>
        <div className='text-center space-y-4 md:max-w-[520px]'>

        <h1  className='text-3xl font-bold md:text-4xl'>What Our Clients <span className='text-primary'>Say About Us</span></h1>
        <p className='text-muted text-sm'>Discover a wide range of astrological services designed to illuminate your path, enhance your well-being, and guide you towards your highest potential.</p>
        </div>
    </div>
    <div className='w-full'>

    <Corousal />
    </div>
    </div>
  )
}

export default ClientTestimonial
