import React, { useState, useEffect } from 'react';


function Post(props) {


    const [post, setPost] = useState()
    const postUrl = 'http://localhost:8000/post/?format=json'



    useEffect(() => {
        fetch(postUrl)
        .then(res => res.json())
        .then(res => setPost(res))
        .catch(console.error)
    },[])


    if (!post) {
        return null
    } else {
    return (
        post.map(posts => {
            return (
        <div>
            <h3>{posts.body}</h3>
        </div>
            )
        })
    );
    }
}

export default Post;