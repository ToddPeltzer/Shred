import React, { useState, useEffect } from 'react';

function Landing(props) {


    const [beach, setBeach] = useState()
    const url = 'http://localhost:8000/beach/?format=json'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setBeach(res))
        .catch(console.error)
    },[])

    if (!beach) {
        return null
    } else {
    return (
        beach.map(beaches => {
            return (
        <div>
            {beaches.name}
            <br/>
            <img height="400px" width="700px" style={{borderRadius:"50px"}} src={beaches.image_url} alt={beaches.name}></img>
        </div>
            )
        })
    );
    }
}

export default Landing;