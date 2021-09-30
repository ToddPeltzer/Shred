import React, { useState } from 'react';
import axios from 'axios';
import EditPostForm from './EditPostForm';



function Post({ post, currentBeach, setPost, beach, setPostModal }) {

    const [editModal, setEditModal] = useState(false)
    const [id, setID] = useState()

    
    const deletePost = async (id) => {
        const url = `http://localhost:8000/post/${id}`
        axios.delete(url)
        .then((res) => {
            axios.get('http://localhost:8000/post/').then(res => {
                setPost(res.data)
            })
        })
    }


    function openEditModal(id) {
        console.log(id)
        setEditModal(true)
        setID(id)
    }

    
    if (!post) {
        return null
    } else {
        let filteredPost = post.filter(item => item.beach == currentBeach)
        filteredPost.reverse()
        return(
            filteredPost.map(item => {
                return (
                    <div className='post-container'>
                    
                        <img height='300px' width='600' src={item.image != "" ? item.image : null} alt=""/>
                        <div className='post-information'>
                            <div className='post-name'>{item.user}</div>
                            <div className='post-date'>{item.date}</div>
                            <div className='post-body'>{item.body}</div>
                        </div>
                        <button onClick={() => openEditModal(item.id)}>Edit</button>
                        <button onClick={() => deletePost(item.id)}>Delete</button>

                        <EditPostForm 
                        setEditModal={setEditModal}
                        editModal={editModal}
                        setPost={setPost}
                        beach={beach}
                        id={id}
                        />
                    
                    </div>
                );
            })
        )
    }
}

export default Post;