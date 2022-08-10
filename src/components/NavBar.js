import React from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

export default function NavBar({darkTheme, setDarkTheme}) {
  return (
    <div className='flex pl-10 py-4 space-x-8 items-center dark:bg-gray-900 relative'>
        <img src={Logo} className="w-[50px] md:w-[60px]"></img>
        <Link to="/" className='text-blue-400 font-bold text-xl md:text-3xl'> Movies </Link>
        <Link to="/favourites" className='text-blue-400 font-bold text-xl md:text-3xl'> Favourites </Link>

        <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl absolute right-10 dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
                  {darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>
    </div>
  )
}
