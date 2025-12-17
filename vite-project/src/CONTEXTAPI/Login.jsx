import React, { useState } from 'react'

function Login() {
    const [formData,setFormDat]=useState({
        email:"",
        name:""
    })
    let handelSubmit=async(e)=>{
   await fetch("http://localhost:3001/user",{
    method:"PoST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(formData)
   })
   alert("login successful");
   setFormDat({
    emai:"",
    name:""
   })
    }
   let handelChange=(e)=>{
    setFormDat({...formData,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="email" name="email" onChange={handelChange} />
            <input type="text" name="name" onChange={handelChange}  />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Login