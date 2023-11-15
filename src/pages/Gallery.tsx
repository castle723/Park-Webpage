import React from 'react'
import main from '../public/Main_gallery.jpeg'
import basketball from '../public/alberta-park-basketball.jpeg'
import plants from '../public/alberta-plants.jpeg'
import pavilion from '../public/Pavilion.jpeg'
import sign from '../public/sign.jpeg'
import flowers from '../public/flowers.jpeg'
function Gallery() {
  return (
    <>
    <div className='flex flex-row font-medium mt-8 ml-8 mb-8 text-3xl'>
      <h1>Gallery</h1>
    </div>
    <div className="grid gap-4 ml-6 mr-6" >
        <div>
            <img className="h-auto max-w-full rounded-lg" src={main} alt="Photo of trees"/>
        </div>
        <div className="grid grid-cols-5 gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src={basketball} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={plants} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={pavilion} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={sign} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={flowers} alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery
