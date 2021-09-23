import React, { useState, useEffect } from 'react';

function Landing(props) {


    const [beach, setBeach] = useState()
    const url = 'http://localhost:8000/beach/?format=json'

    fetch(url)
    .then(res => res.json())
    .then(res => setBeach(res))
    .catch(console.error)

    if (!beach) {
        return null
    } else {
    return (
        <div>
            {beach[0].name}
        </div>
    );
    }
}

export default Landing;