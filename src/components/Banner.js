import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Banner() {

  let [topRatedMovie, setTopRatedMovie] = useState([]);

  useEffect(function(){
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=61509c80cbff1f80bd05efaeb3d53f55&language=en-US&page=1`).then((res)=>{
        // console.table(res.data.results)
        setTopRatedMovie(res.data.results)
        // console.log(movies.length)
    })
},[])

  return (
    <>
    {
      topRatedMovie.length != 0 ? <div className={`bg-[url(https://image.tmdb.org/t/p/original/${topRatedMovie[5].backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
                                      <div className='text-xl md:text-3xl text-white p-6 bg-gray-900 bg-opacity-50 w-full flex justify-center'>
                                          {topRatedMovie[5].original_title}
                                      </div>
                                  </div>
                                : <div>Loading...</div>
    }
    
    </>
  )
}

export default Banner