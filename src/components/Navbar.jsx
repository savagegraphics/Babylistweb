"use client";
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { RiMenu2Fill, RiMenu3Fill } from 'react-icons/ri'
import { GiShoppingCart, GiRoyalLove } from 'react-icons/gi'

const Navbar = () => {
    const [ showNavbar, setShowNavbar ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="menu-icon" onClick={ handleShowNavbar }>
                    { isOpen ? (
                        <RiMenu3Fill className="cart" size={ 24 } color='#85586F' onClick={ toggleMenu } />
                    ) : (
                        <RiMenu2Fill className="cart" size={ 24 } color='#85586F' onClick={ toggleMenu } />
                    )

                    }                </div>
                <div className="logo">
                    <GiRoyalLove className="w-5 h-5 mr-4" />
                    babylist
                </div>

                <div className={ `nav-elements  ${showNavbar && 'active'}` }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Registry</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Guides</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Help</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Log In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">FAQ</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="cart-icon">
                    <GiShoppingCart className="cart" size={ 24 } color='#85586F' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar