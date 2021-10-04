import React from 'react';
import video from '../images/Rincon_Point_California__RAW_SURFING_FIRING_OVERHEAD_WAVES_.gif'

function Landing({ beach }) {

    
    
    
    return (
        <div className='landing-page-container'>

            <img className='landing-image' src={video} alt=""/>
            <div className='landing-about-container'>
                <div className='landing-about-title'>About Shred Live</div>
                <div className='landing-about-subtitle'>Interact with Surfers Locally</div>
                <div className='landing-about'>For local beach communities, finding the right surf spot at the right time is everything. Unlike most surf apps, here you will be able to interact with your local surfers and post updates on popular surf spots... LIVE! No more banking on early morning updates just to find out the expected surf never rolled in.</div>
            </div>
            
        </div>
    );
}

export default Landing;