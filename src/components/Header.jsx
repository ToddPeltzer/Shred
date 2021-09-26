import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Header(props) {
    return (
        <div className='header-container'>
            
            <div className='header-title'><Link className='header-link' to='/'><h1>Shred Live</h1></Link></div>
            <div className='header-beach'><Link className='header-link' to='/beach'><h2>Beach</h2></Link></div>
            <div className='header-about'><Link className='header-link'><h2>About</h2></Link></div>
            <div className='header-sign'><Link className='header-link'><h2>Sign In</h2></Link></div>

        </div>
    );
}

export default Header;