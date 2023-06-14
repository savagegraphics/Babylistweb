import React from 'react'
import Navbar from "../components/Navbar"
import CTA from '../components/CTA'
import Mui from '../components/Mui'
import Landpage from '../components/Landpage'
import Landpagetwo from '../components/Landpage2'
import Footer from '../components/Footer'
import AnewOne from '@/components/layouts/AnewOne'
import AnewTwo from '@/components/layouts/AnewTwo'
import AnewEight from '@/components/layouts/AnewEight'
import AnewTen from '@/components/layouts/AnewTen'


const Services = (props) => {
    return (
        <div>
            <Navbar />
            <Landpagetwo />
            <Mui />
            <AnewOne />
            <AnewTwo />
            <AnewEight />
            <AnewTen />
            <CTA />
            <Landpage />
            <Footer />
        </div>
    )
}

export default Services