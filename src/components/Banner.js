import React from 'react'
import Image from '../assets/bahubali.jpeg'

function Banner() {
  return (
    <>
    <div className={`bg-[url(${Image})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
        <div className='text-xl md:text-3xl text-white p-6 bg-gray-900 bg-opacity-50 w-full flex justify-center'>
            BahuBali
        </div>
    </div>
    </>
  )
}

export default Banner