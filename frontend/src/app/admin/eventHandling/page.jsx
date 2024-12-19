
'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div className='py-20 flex flex-col items-center'>
        <h1 className='text-center font-bold  text-4xl mb-10'>EventHandling</h1>
        <button className='border bg-blue-900 text-white p-5 rounded-xl'onClick={() => {alert('Are you sure')}}>Click Here</button>
    </div>
  )
}

export default EventHandling