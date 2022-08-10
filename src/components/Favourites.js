import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import Tables from './Tables';

function Favourites() {

  let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }

  let [favourites, SetFavourites] = useState([]);
  let [currGenre, setCurrGenre] = useState('All Genres');
  let [pageNumber, setPageNumber] = useState(1);
  let [genres, setGenres] = useState([]);
  let [ratings, setRatings] = useState(0);
  let [popularity, setPopularity] = useState(0);
  let [search, setSearch] = useState("");
  let [rows, setRows] = useState(5);

  useEffect(()=>{
    let oldFav = localStorage.getItem("imdb");
    oldFav = JSON.parse(oldFav) || [];
    SetFavourites([...oldFav]);
  }, [])

  useEffect(()=>{
    let temp = favourites.map((movie)=> genreids[movie.genre_ids[0]])
    // console.log(temp)
    temp = new Set(temp)
    setGenres(["All Genres", ...temp])
  },[favourites])

  const increasePageNumber = () => {
    if(pageNumber < maxPage)
      setPageNumber(pageNumber + 1);
  }

  const decreasePageNumber = () => {
    if(pageNumber > 1)
      setPageNumber(pageNumber - 1);
  }

  const remove = (movie) => {
    let newArr = [...favourites];
    let idx = newArr.indexOf(movie);
    newArr.splice(idx, 1);
    SetFavourites(newArr)
    localStorage.setItem("imdb", JSON.stringify(newArr));
}

let filteredMovies = [];

// Sorting on the basis of Genre
filteredMovies = currGenre == "All Genres" ? favourites : favourites.filter((movie)=>currGenre == genreids[movie.genre_ids[0]])

// Sorting on the basis of Ratings
if(ratings == 1){
  filteredMovies = filteredMovies.sort(function(objA, objB){
    return objA.vote_average - objB.vote_average;
  })
}else if(ratings == -1){
  filteredMovies = filteredMovies.sort(function(objA, objB){
    return objB.vote_average - objA.vote_average;
  })
}

// Sorting on the basis of Popularity
if(popularity == 1){
  filteredMovies = filteredMovies.sort(function(objA, objB){
    return objA.popularity - objB.popularity;
  })
}else if(popularity == -1){
  filteredMovies = filteredMovies.sort(function(objA, objB){
    return objB.popularity - objA.popularity;
  })
}

// Searching
filteredMovies = filteredMovies.filter((movie)=>
  movie.title.toLowerCase().includes(search.toLowerCase())
)

// Pagination
let maxPage = Math.ceil(filteredMovies.length / rows);
let si = (pageNumber - 1) * rows;
let ei = Number(si) +Number(rows);

filteredMovies = filteredMovies.slice(si, ei);

  return (
    <>
      <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2'>    
          {
            genres.map((genre)=>
                <button className={ currGenre == genre ?
                'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold hover:bg-blue-400'
                :'m-2 text-lg p-1 px-2 bg-gray-400 text-white rounded-xl font-bold hover:bg-blue-400'
              }
              onClick={()=>{setCurrGenre(genre)
                    setPageNumber(1);
              }}
              >
                {genre}
              </button>
            )
          }
      </div>
      <div className='text-center'>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search' className='border border-2 text-center p-1 m-2'></input>
        <input type='number' value={rows} onChange={(e)=>setRows(e.target.value)} placeholder='rows' className='border border-2 text-center p-1 m-2'></input>
      </div>
      <Tables favourites={filteredMovies} remove={remove} setRating={setRatings} setPopularity={setPopularity}/>
      <Pagination pageNumber={pageNumber} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
    </>
  )
}

export default Favourites