import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Oval } from  'react-loader-spinner'
import Pagination from './Pagination';

function Movies() {

  let [movies, setMovies] = useState([]);
  let [hover, setHover] = useState("");
  let [favourites, SetFavourites] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);

  const increasePageNumber = () => {
    setPageNumber(pageNumber + 1);
  }

  const decreasePageNumber = () => {
    if(pageNumber > 1)
      setPageNumber(pageNumber - 1);
  }

    useEffect(function(){

        let oldFav = localStorage.getItem("imdb");
        oldFav = JSON.parse(oldFav);
        SetFavourites([...oldFav]);

        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=61509c80cbff1f80bd05efaeb3d53f55&page=${pageNumber}`).then((res)=>{
            console.table(res.data.results)
            setMovies(res.data.results)
            // console.log(movies.length)
        })
    },[pageNumber])

    const add = (movie) =>{
        let newArr = [...favourites, movie];
        SetFavourites(newArr);
        localStorage.setItem("imdb", JSON.stringify(newArr));
        // console.log(newArr)
    }

    const remove = (movie) => {
        let newArr = [...favourites];
        let idx = newArr.indexOf(movie);
        newArr.splice(idx, 1);
        SetFavourites(newArr)
        localStorage.setItem("imdb", JSON.stringify(newArr));
    }

  return (
    <>
    <div className='mb-8'>
        <div className='mt-8 mb-8 font-bold text-5xl text-center dark:text-white'>Trending Movies</div>
        {
            (movies.length != 0) ? <div className='flex flex-wrap justify-center'>
                                    {
                                        movies.map((movie) => (
                                            <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[25vh] w-[150px] realtive
                                            md:h-[30vh] md:w-[250px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
                                            onMouseEnter={()=>setHover(movie.id)}
                                            onMouseLeave={()=>setHover("")}
                                            >
                                                {
                                                    hover == movie.id && <>
                                                        {
                                                            !favourites.find((m)=> m.id == movie.id) ? <div className='absolute top-2 right-2 text-2xl cursor-pointer' onClick={()=>add(movie)}>🤍</div>
                                                                                                    : <div className='absolute top-2 right-2 text-2xl cursor-pointer' onClick={()=>remove(movie)}>❤</div>
                                                        }
                                                        
                                                    </>
                                                }
                                                <div className='w-full dark:bg-white dark:text-black bg-gray-900 text-center text-white rounded-b-xl'>{movie.title}</div>
                                            </div>
                                        ))
                                    }
                                   </div>
                                : 
                                <div className='flex justify-center'>
                                    <Oval height = "80" width = "80" radius = "12" color = 'blue'/>
                                </div>
        }
        
    </div>

    <Pagination pageNumber={pageNumber} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
    </>
  )
}

export default Movies