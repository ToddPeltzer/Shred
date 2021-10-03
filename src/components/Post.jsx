import React, { useState } from 'react';
import axios from 'axios';
import EditPostForm from './EditPostForm';



function Post({ post, currentBeach, setPost, beach, setPostModal }) {

    const [editModal, setEditModal] = useState(false)
    const [id, setID] = useState()
    const [user, setUser] = useState()
    const [body, setBody] = useState()
    const [image, setImage] = useState()


    const deletePost = async (id) => {
        const url = `https://shred-live.herokuapp.com/post/${id}`
        axios.delete(url)
        .then((res) => {
            axios.get('https://shred-live.herokuapp.com/post/').then(res => {
                setPost(res.data)
            })
        })
    }


    function openEditModal(id, user, body, image) {
        setEditModal(true)
        setID(id)
        setUser(user)
        setBody(body)
        setImage(image)
    }

    
    if (!post) {
        return null
    } else {
        let filteredPost = post.filter(item => item.beach == currentBeach)
        filteredPost.reverse()
        return(
            filteredPost.map(item => {
                return (
                    <div>
                    <div className='post-container'>
                        <img className='post-image' src={item.image != "" ? item.image : null} alt=""/>
                        <div className='post-information'>
                            <div className='post-name'>{item.user}</div>
                            <div className='post-date'>{item.date}</div>
                            <div className='post-body'>{item.body}</div>
                        
                        <button className='post-edit-button' onClick={() => openEditModal(item.id, item.user, item.body, item.image)}>Edit</button>
                        <button className='post-delete-button' onClick={() => deletePost(item.id)}>Delete</button>
                        </div>
                    </div>
                        <EditPostForm 
                        setEditModal={setEditModal}
                        editModal={editModal}
                        setPost={setPost}
                        beach={beach}
                        id={id}
                        userPass={user}
                        bodyPass={body}
                        imagePass={image}
                        />
                    
                    </div>
                );
            })
        )
    }
}

export default Post;