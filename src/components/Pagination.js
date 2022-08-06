import React from 'react'
import { useState } from 'react'
function Pagination() {
  let [pageNumber, setPageNumber] = useState(1);

  const increasePageNumber = () => {
    setPageNumber(pageNumber + 1);
  }

  const decreasePageNumber = () => {
    if(pageNumber > 1)
      setPageNumber(pageNumber - 1);
  }

  return (
    <>
        <div className='w-full flex justify-center mb-8'>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl' onClick={decreasePageNumber}>Previous</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500'>{pageNumber}</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl' onClick={increasePageNumber}>Next</button>
        </div>
    </>
  )
}

export default Pagination