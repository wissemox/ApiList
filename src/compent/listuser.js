import React, { useEffect, useState } from "react";
import Design from './designuser'
import axios from "axios" 
const Listuser = () => {

 const[post , setPost ] = useState([])
 useEffect(()=> { 
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(res=> { 
     console.log(res)
     setPost(res.data)
   })
  .catch(err =>{ 
    console.log(err)
  })
  })
 return ( 
   <>
    <div> 
      {console.log(post)}
       <ul> 
         { 
         post.map(post => <Design post={post}/>)
         }
       </ul>
    </div>
   </>
 );
};
export default Listuser;