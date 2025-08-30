import React from 'react'
import { Button } from './ui/button'
import VideoCard from './VideoCard'

function VideoWisdom() {
  return (
     <div className='w-full bg-background-muted-secondary flex flex-col gap-5 items-center px-10 md:px-18 py-8 '>
        <div className='text-center space-y-4 md:max-w-[520px]'>

            <h1 className='text-3xl font-bold md:text-4xl text-primary'>Video Wisdom</h1>
            <p className='text-muted text-sm'> Explore the mysteries of astrology through our comprehensive video library, featuring detailed explanations and practical guidance for your spiritual journey.</p>
        </div>
        <div className='flex flex-col gap-3 md:flex-row'>
            <Button size={'lg'}>Trending Video</Button>
            <Button size={'lg'}>Popular Video</Button>
        </div>
    <VideoCard />
    </div>
  )
}

export default VideoWisdom
