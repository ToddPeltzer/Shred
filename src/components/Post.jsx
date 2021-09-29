import React from 'react';
import axios from 'axios';

function Post({ post, currentBeach, setPost }) {

    // const editPost = (e) => {
    //     e.preventDefault()
    //     const urlPost = 'http://localhost:8000/post/?format=json'
    //     const url = window.location.pathname.split('/')
    //     axios.put(urlPost + url[2])
    // }

    // function deletePost()  {
    //         console.log('MADE IT')
    //         axios.delete('http://localhost:8000/post/5?format=json').then(() => {
    //             axios.get('http://localhost:8000/post/?format=json')
    //                 .then(res => setPost(res))
    //                 console.log('MADE IT HERE')
    //         })
    // }
    const deletePost = async (id) => {
        try {
            const url = `http://localhost:8000/post/${id}`
            axios.delete(url)
        } catch (error){

        }
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
                    
                        <img height='300px' width='600' src={item.image != "" ? item.image : null}/>
                        <div className='post-information'>
                            <div className='post-name'>{item.user}</div>
                            <div className='post-date'>{item.date}</div>
                            <div className='post-body'>{item.body}</div>
                        </div>
                        <button>Edit</button>
                        <button onClick={() => deletePost(item.id)}>Delete</button>
                
                    </div>
                );
            })
        )
    }
}

export default Post;