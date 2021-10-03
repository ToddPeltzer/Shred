import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/shred-logo-3.png'
import location from '../images/location.png'

import '../App.css'

function Header(props) {
    return (
        <div className='header-container'>
            
            <Link className='header-link' to='/'><img className='header-image' src={Logo} alt='shred logo'/></Link>
            <div className='header-title'><Link className='header-link' to='/'><h1>Shred Live</h1></Link></div>
            <Link className='header-link' to='/beach'><img className='header-location-image' src={location} alt='shred logo'/></Link>
            <div className='header-beach'><Link className='header-link' to='/beach'><h2>Find Your Beach</h2></Link></div>
            {/* <div className='header-about'><Link className='header-link' to='/'><h2>About</h2></Link></div> */}
            {/* <div className='header-sign'><Link className='header-link' to='/'><h2>Sign In</h2></Link></div> */}

        </div>
    );
}

export default Header;