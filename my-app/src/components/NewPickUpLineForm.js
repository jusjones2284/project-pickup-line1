import React, { useState } from "react";



const NewPickUpLineForm = ({ handleNewLine })=>{
    // const [input, setInput] = useState("")
 const [formData, setFormData] = useState({
        content: "",
        setting: ""

  })   

  
  const handleChanges = (event) =>{
        console.log(formData)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

  
    const handleSubmitEvent =(e)=>{
        e.preventDefault()
        fetch("http://localhost:3004/pickuplines",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((res)=> res.json())
        .then((pickUp) => handleNewLine(pickUp))
    
        setFormData({
        content: "",
        setting: ""

  })

      }
      

   
    return(
        <div>
        <h1>New Pickup Line</h1>
       <form onSubmit={handleSubmitEvent}>
           Content <input 
           onChange={handleChanges}
           type="text"
           placeholder="pickup line..."
           value={formData.content}
           name="content"
           />
            Setting <input 
           onChange={handleChanges}
           type="text"
           placeholder="setting..."
           value={formData.setting}
           name="setting"
           />
           <input 
           type="submit"
           value="submit"
           />
       </form></div>
    )
}

export default NewPickUpLineForm