import React from 'react';
import { Link } from 'react-router-dom';
import githubImage from '../images/github.png'
import linkedinImage from '../images/linkedin.png'

function Footer(props) {
    return (

        <div className='footer-container'>

            <div className='footer-name'>
                <a className='footer-name-link' href='https://todd-peltzer-portfolio.squarespace.com/' target='_blank'><h2>Todd Peltzer</h2></a>
            </div>
            <div className='footer-github'>
                <a href='https://github.com/ToddPeltzer' target='_blank'><img className='footer-social-image' src={githubImage} /></a>
                <a className='footer-social-name-link' href='https://github.com/ToddPeltzer' target='_blank'><h3>GitHub</h3></a>
            </div>
            <div className='footer-linkedin'>
                <a href='https://www.linkedin.com/in/todd-peltzer/' target='_blank'><img className='footer-social-image' src={linkedinImage} /></a>
                <a className='footer-social-name-link' href= 'https://www.linkedin.com/in/todd-peltzer/' target='_blank'><h3>Linkedin</h3></a>
            </div>

        </div>
    );
}

export default Footer;