import React from 'react'

const AllPickUpLines = ({  pickUpLines }) => {

const displayAllPickUpLines = pickUpLines.map((pickup)=> <><p><strong>{pickup.setting}</strong> </p><li>{pickup.content}</li> </>) 

   

  return (
   
    <>
    <h1>Pickup Lines</h1>
    {displayAllPickUpLines}
    </>
      
  )
}

export default AllPickUpLines