import React from 'react'
import image from '../public/main_image.jpeg'
import map from '../public/map.png'
function Home() {
  return (
    <>
    <div >
    <div className='flex flex-row font-medium mt-12 ml-8 text-3xl'>
      <h1>Alberta Park </h1>
    </div>
    <img className='p-8 flex flex-row' src= {image} alt="" />
    <div className='flex flex-row font-medium ml-8 text-xl'>
        Open Hours
    </div>
    <div className='flex flex-row font-medium ml-16 text-sm'>
        Park is open from: 5:00AM-Midnight
    </div>
    <div className='flex flex-row font-medium mt-5 ml-8 text-xl'>
        Park Amenitites
    </div>
    <ul className='list-disc flex flex-row ml-20 text-sm'>
        <li>Accessible Play Area</li>
    </ul>
    <ul className='list-disc flex flex-row ml-20 text-sm'>
        <li>Nature Patch</li>
    </ul>
    <ul className='list-disc flex flex-row ml-20 text-sm'>
        <li>Picnic Tables(contact us to reserve)</li>
    </ul>
    <ul className='list-disc flex flex-row ml-20 text-sm'>
        <li>Basketball Court</li>
    </ul>
    <ul className='list-disc flex flex-row ml-20 text-sm'>
        <li>Soccer Field</li>
    </ul>
    <ul className='list-disc flex flex-row ml-20 text-sm'>
        <li>Dog Off-leash Area</li>
    </ul>
    <ul className='list-disc flex flex-row ml-20 text-sm'>
        <li>Paved Paths</li>
    </ul>
        <div className='flex flex-row ml-8 mb-6 mt-4' >
            <img className='flex h-3/4 w-3/4' src={map} alt="" />
        </div>
    </div>
    </>
  )
}

export default Home
