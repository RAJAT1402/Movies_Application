import React,{useState} from 'react'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourites from './components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark bg-gray-900' : ''}>

    <BrowserRouter>
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes>
            <Route path="/" element={<>
                                      <Banner />
                                      <Movies />
                                    </>}
            />
            <Route path="/favourites" element={<Favourites />}/>
        </Routes>   
    </BrowserRouter>
    </div>
  )
}

export default App