import React, { useEffect, useState } from "react";


const Success =({ successStories })=>{
 const allSuccessStories =  successStories.map((success)=>{
    return(
        <ul><li>{success.content}</li></ul>
    )
   })
   
    return(
        <>
        <h1>Success Stories</h1>
        {allSuccessStories}
        </>
      
    )
}

export default Success

