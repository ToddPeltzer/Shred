import React, { useState } from 'react';


function BeachDetails({ beach, post, match }) {

    console.log('BEACH:', beach)
    console.log('POST:', post)
    
    const currentBeach = match.params.id

    console.log('MATCH:', currentBeach)

    
    if (!post) {
        return null
    } else {
        console.log('POST.BEACH:', post[0].beach)
        let filteredPost = post.filter(item => item.beach == currentBeach)
        console.log('FILTERED:', filteredPost)
        return(
        filteredPost.map(item => {
    return (
        <div>
            
            <img height='300px' width='600' src={item.image}/>
            <br/>
            {item.user}
            <br/>
            {item.date}
            <br/>
            {item.body}

        </div>
    );
})
)
    }
}
// }

export default BeachDetails;