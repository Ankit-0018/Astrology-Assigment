import React from 'react'

function BadgeLabel({text} : {text: string}) {
  return (
    <div className='bg-background-secondary max-w-[450px] text-center px-2 py-1 text-primary font-semibold'>
            <h2 className='text-sm'>{text}</h2>
        </div>
  )
}

export default BadgeLabel
