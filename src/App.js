import React,{useState} from 'react'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import Favourites from './components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    let [gPage, setGpage] = useState(1);

    const globalPage = (pgno) => {
        setGpage(pgno);
    }
  
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" 
                element={<>
                    <Banner />
                    <Movies gPage={gPage}/>
                    <Pagination globalPage={globalPage}/>
                </>}
            />
            <Route path="/favourites" element={<Favourites />}/>
        </Routes>   
    </BrowserRouter>
  )
}

export default App