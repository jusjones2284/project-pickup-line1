import React from 'react'
import AllPickUpLines from './AllPickUpLines'

function PickUpLinesContainer({pickUpLines}) {

  return (
      <>
      {pickUpLines.map(pickUp => {
          return <AllPickUpLines content={pickUp.content} setting={pickUp.setting} key={pickUp.id}></AllPickUpLines> 
      })}
    <div>PickUpLinesContainer</div>
    </>
  )
}

export default PickUpLinesContainer