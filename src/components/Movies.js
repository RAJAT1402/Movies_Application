import React from 'react'
import Image from '../assets/bahubali.jpeg'

function Movies() {
  return (
    <div className='mb-8'>
        <div className='mt-8 mb-8 font-bold text-5xl text-center'>Trending Movies</div>
        <div className='flex flex-wrap justify-center'>
            <div className={`bg-[url(${Image})] h-[25vh] w-[150px] md:h-[30vh] md:w-[250px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                <div className='w-full bg-gray-900 text-center text-white rounded-b-xl'>Bahubali</div>
            </div>
            <div className={`bg-[url(${Image})] h-[30vh] w-[250px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                <div className='w-full bg-gray-900 text-center text-white rounded-b-xl'>Bahubali</div>
            </div>
            <div className={`bg-[url(${Image})] h-[30vh] w-[250px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                <div className='w-full bg-gray-900 text-center text-white rounded-b-xl'>Bahubali</div>
            </div>
            
        </div>
    </div>
  )
}

export default Movies