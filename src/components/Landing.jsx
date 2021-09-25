import React from 'react';
import { Link } from 'react-router-dom';

function Landing({ beach }) {

    return (
        <div>

            <Link to='/beach'>
                <button>Beach List</button>
            </Link>
            
        </div>
    );
}

export default Landing;