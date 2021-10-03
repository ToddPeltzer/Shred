import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import NewPostForm from './NewPostForm';


function BeachDetails({ post, match, setPost }) {

    const currentBeach = match.params.id
    
    const urlBeach = `https://shred-live.herokuapp.com/beach/${currentBeach}`

    const [beach, setBeach] = useState()
    const [postModal, setPostModal] = useState(false)

    useEffect(() => {
        axios.get(urlBeach).then(res => {
          setBeach(res.data)
        })
      }, [])

      function openModal() {
          setPostModal(true)
      }
      
    if (!beach) {
        return null
    } else {
        return (
            <div className='beach-detail-container'>

                <div className='beach-detail-image-container'>
                    <img className='beach-detail-image' src={beach.image_url} alt=""/>
                </div>
                <div className='beach-detail-information'>
                    <div className='beach-detail-name'>{beach.name}</div>
                    <div className='beach-detail-city'>{beach.city}, {beach.state}</div>
                    <div className='beach-detail-description'>{beach.description}</div>
                    <button className='beach-detail-create-button' onClick={openModal}>+ Update</button>
                </div>




                <div className='beach-detail-post-container'>
                    <Post 
                    post={post}
                    match={match}
                    currentBeach = {currentBeach}
                    setPost={setPost}
                    setPostModal={setPostModal}
                    beach={beach}
                    />
                </div>
                
                <div>
                    <NewPostForm 
                    setPost={setPost}
                    beach={beach}
                    setBeach={setBeach}
                    postModal={postModal}
                    setPostModal={setPostModal}
                    />
                </div>

            </div>
        );
    }
}

export default BeachDetails;