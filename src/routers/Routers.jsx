import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero_page from '../pages/Hero_page';
import Garlands_page from '../pages/Garlands_page';
import Bouquets_page from '../pages/Bouquets_page';
import About_page from '../pages/About_page';
import Contact_page from '../pages/Contact_page';
import Nav from '../components/Hero/Nav';

const Routers = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={< Hero_page />} />
        <Route path='/Garlands' element={ < Garlands_page /> } />
        <Route path='/Bouquets' element={ < Bouquets_page /> } />
        <Route path='/About' element={ < About_page /> } />
        <Route path='/Contact' element={ < Contact_page /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default Routers
