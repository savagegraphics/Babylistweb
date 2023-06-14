import React from 'react'
import Navbar from '../components/Navbar'
import Landpage from '../components/Landpage2'
import Landpagetwo from '../components/Landpage'
import Hero from '../components/Hero'
import Tailwind from '../components/Tailwind'
import Tailwindtwo from '../components/Tailwindtwo'
import Function from '../components/Function'
import Card from '@/components/Card'
import GetStarted from '@/components/GetStarted'
import AnewSix from '@/components/layouts/AnewSix'
import AnewSeven from '@/components/layouts/AnewSeven'
import Footer from '@/components/Footer'




const Home = () => {
    return (
        <div>
            <Navbar />
            <Landpage />
            <AnewSeven />
            <Tailwind />
            <AnewSix />
            <Function />
            <Card />
            <Tailwindtwo />
            <Landpagetwo />
            <Footer />
        </div>
    )
}

export default Home