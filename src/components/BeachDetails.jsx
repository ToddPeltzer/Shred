import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import NewPostForm from './NewPostForm';
import Modal from 'react-modal';


function BeachDetails({ post, match, setPost }) {

    const currentBeach = match.params.id
    
    const urlBeach = `http://localhost:8000/beach/${currentBeach}`

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
      
      const taskModalStyle = {
        content: {
            top: '45%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          },
      }


    //   useEffect(() => {
    //     axios.get(urlNotes+ '/note/' + note).then(res => {
    //         setNotes(res.data.text)
    //         setSubject(res.data.subject)
    //     }) 
    // },[note])

    // function deletePost()  {
    //     const urlPost = 'http://localhost:8000/post/?format=json'
    //     axios.delete(urlPost).then(() => {
    //         axios.get(urlPost)
    //             .then(res => setPost(res.data))
    //     })
    // }

    if (!beach) {
        return null
    } else {
        return (
            <div className='beach-detail-container'>

                <div classname='beach-detail-image-container'>
                    <img className='beach-detail-image' src={beach.image_url}/>
                </div>
                <div className='beach-detail-information'>
                    <div>{beach.name}</div>
                    <div>{beach.city}, {beach.state}</div>
                    <div>{beach.description}</div>
                    <button onClick={openModal}>Create Post</button>
                </div>




                <div className='beach-detail-post-container'>
                    <Post 
                    post={post}
                    match={match}
                    currentBeach = {currentBeach}
                    setPost={setPost}
                    // deletePost={deletePost}
                    />
                </div>
                
                <Modal isOpen={postModal} onRequestClose={()=> setPostModal(false)} style={taskModalStyle}>
                    <div>
                <NewPostForm 
                setPost={setPost}
                setPostModal={setPostModal}
                />
                </div>

                </Modal>
            </div>
        );
    }
}

export default BeachDetails;