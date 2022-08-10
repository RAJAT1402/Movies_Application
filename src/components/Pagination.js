import React from 'react'

function Pagination(props) {

  return (
    <>
        <div className='w-full flex justify-center mb-8'>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl' onClick={props.decreasePageNumber}>Previous</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500'>{props.pageNumber}</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl' onClick={props.increasePageNumber}>Next</button>
        </div>
    </>
  )
}

export default Pagination