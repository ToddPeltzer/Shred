import React from 'react';
import { Link } from 'react-router-dom';
import githubImage from '../images/github.png'
import linkedinImage from '../images/linkedin.png'

function Footer(props) {
    return (

        <div className='footer-container'>

            <div className='footer-name'>
                <Link className='footer-name-link' to='/'><h2>Todd Peltzer</h2></Link>
            </div>
            <div className='footer-github'>
                <Link><img className='footer-social-image' src={githubImage} /></Link>
                <Link className='footer-social-name-link' to='/'><h3>GitHub</h3></Link>
            </div>
            <div className='footer-linkedin'>
                <Link><img className='footer-social-image' src={linkedinImage} /></Link>
                <Link className='footer-social-name-link'><h3>Linkedin</h3></Link>
            </div>

        </div>
    );
}

export default Footer;