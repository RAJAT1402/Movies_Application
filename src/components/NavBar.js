import React from 'react'
import Logo from '../assets/movie.png';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='flex pl-10 py-4 space-x-8 items-center'>
        <img src={Logo} className="h-15 w-20 md:h-20 md:w-30"></img>
        <Link to="/" className='text-blue-400 font-bold text-xl md:text-3xl'> Movies </Link>
        <Link to="/favourites" className='text-blue-400 font-bold text-xl md:text-3xl'> Favourites </Link>
    </div>
  )
}
