import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import Favourites from './components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" 
                element={<>
                    <Banner />
                    <Movies />
                    <Pagination />
                </>}
            />
            <Route path="/favourites" element={<Favourites />}/>
        </Routes>   
    </BrowserRouter>
);
