import React from 'react';

function Post({ post, match, currentBeach }) {

    
    if (!post) {
        return null
    } else {
        let filteredPost = post.filter(item => item.beach == currentBeach)
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
                
                    </div>
                );
            })
        )
    }
}

export default Post;