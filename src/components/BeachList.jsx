import React from 'react';
import { Link } from 'react-router-dom';

function Landing({ beach }) {

    
    if (!beach) {
        return null
    } else {
        return (
            beach.map(beaches => {
                return (
                    <div className='beach-list-container'>

                        <div className='beach-list'>
                            <div>
                                <Link to={`/beach/${beaches.id}`} key = {beaches.id}>
                                    <img className='beach-list-image' src={beaches.image_url} alt={beaches.name}></img>
                                </Link>
                            </div>
                            <div className='beach-list-name'>
                                <Link className='beach-list-name-link' to={`/beach/${beaches.id}`} key = {beaches.id}>
                                    <h3>{beaches.name}</h3>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        );
    }
}

export default Landing;