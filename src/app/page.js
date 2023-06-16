import React from 'react'
import Page from '@/pages/page'
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Card from '@/components/Card'
import Hero from '@/components/Hero';
import FooterNew from '@/components/FooterNew';
import About from '@/pages/About';
import Services from '@/pages/Services';

const page = () => {
  return (
    <div>
      <Page />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/hero' element={ <Hero /> } />
      </Routes>
    </div>
  )
}

export default page