import React from 'react';
import { Link } from 'react-router-dom';

function Landing({ beach }) {


    if (!beach) {
        return null
    } else {
    return (
        beach.map(beaches => {
            return (
        <div>
            <Link to={`/beach/${beaches.id}`} key = {beaches.id}>
                <img height="400px" width="700px" style={{borderRadius:"50px"}} src={beaches.image_url} alt={beaches.name}></img>
            </Link>
        </div>
            )
        })
    );
    }
}

export default Landing;