import React , {useState , useEffect}  from 'react'
import axios from 'axios'
function Design({post}) { 
   
    return ( 
        <div className="wissemox">
            <div className="wissemox01">
    <h3>{post.id}</h3>
    </div>
    <div className="wissemox02">
    <p>{post.name}</p>
    </div>
    <div className="wissemox03">
    <p id="wissemox">{post.username}</p>
    </div>
    <div className="wisspp"> 
    <p> {post.email}</p>
    </div>
    </div>
    )
}
export default Design