import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';

function BeachDetails({ post, match }) {

    const currentBeach = match.params.id
    
    const urlBeach = `http://localhost:8000/beach/${currentBeach}?format=json`

    const [beach, setBeach] = useState()

    useEffect(() => {
        axios.get(urlBeach).then(res => {
          setBeach(res.data)
        })
      }, [])

    if (!beach) {
        return null
    } else {
        return (
            <div className='beach-detail-container'>

                <div className='beach-detail-image'>
                    <img src={beach.image_url}/>
                </div>
                <div className='beach-detail-information'>
                    {beach.name}
                    {beach.city}
                    {beach.state}
                    {beach.description}
                </div>
                <div className='beach-detail-post-container'>
                    <Post 
                    post={post}
                    match={match}
                    currentBeach = {currentBeach}
                    />
                </div>
                
            </div>
        );
    }
}

export default BeachDetails;