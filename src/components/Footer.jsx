import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaDiscord, FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import { GiRoyalLove } from 'react-icons/gi';
import About from '../pages/About';




const year = new Date().getFullYear();

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    <GiRoyalLove className="w-5 h-5 mr-4" />
                    Babylist
                </Link>
            </div>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Registry</h2>
                        <Link to='/about'>Why Babylist</Link>
                        <Link to='/about'>Find Registry</Link>
                        <Link to='/about'>Create Registry</Link>
                        <Link to='/about'>Baby Registry Checklist</Link>
                        <Link to='/about'>15% Registry Discount</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/contact'>Team</Link>
                        <Link to='/contact'>Our Story</Link>
                        <Link to='/contact'>Experience</Link>
                        <Link to='/contact'>Jobs, Press</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Guides</h2>
                        <Link to='/contact'>Best Car Seats</Link>
                        <Link to='/'>Best Stroller</Link>
                        <Link to='/'>Best Baby Carriers</Link>
                        <Link to='/'>Best Baby Bottles</Link>
                        <Link to='/'>Best Baby Products</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Support</h2>
                        <Link to='/'>Help</Link>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>Shipping</Link>
                        <Link to='/'>Returns</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link discord'
                            to='/'
                            target='_blank'
                            aria-label='Discord'
                        >
                            <FaDiscord className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link github'
                            to='/'
                            target='_blank'
                            aria-label='Github'
                        >
                            <FaGithub className="w-5 h-5" />
                        </Link>
                    </div>
                    <small className='website-rights'>Babylist™ © { year }. ALL Right Reserved.</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;