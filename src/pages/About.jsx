import React from 'react'
import Navbar from "../components/Navbar"
import CTA from '../components/CTA'
import GetStarted from '../components/GetStarted'
import Landpage from '../components/Landpage'
import Card from '../components/Card'
import Footer from '../components/Footer'
import AnewThree from '@/components/layouts/AnewThree'
import AnewFour from '@/components/layouts/AnewFour'
import AnewFive from '@/components/layouts/AnewFive'
import Mui from '@/components/Mui'





const About = (props) => {
    return (
        <div>
            <Navbar />
            <GetStarted />
            <Mui />
            <AnewThree />
            <AnewFour />
            <AnewFive />
            <CTA />
            <Card />
            <Landpage />
            <Footer />
        </div>
    )
}
export default About