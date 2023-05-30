import React, { useEffect, useState } from 'react'

function Form() {
const data = {name: "", password: ""}
const [inputData, setInputData] = useState(data)
const [flag, setFlag] = useState(false)
useEffect(() => {
    console.log("Registered")
}, [flag])

const handleData = (e) => {
    setInputData({...inputData, [e.target.name]:e.target.value})
    console.log(inputData)
}
const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
        alert("All fields are mandatory")
    }else{
        setFlag(true)
    }
}

  return (
    <>
    <pre>{(flag)?<h3 className='ui-define'>Hello {inputData.name}, you have registerd successfully</h3>:""}</pre>
   <form className='container' onSubmit={handleSubmit}>
    <div className='header'><h1>Registration Form</h1></div>
    <div>
        <input type='text' placeholder='Enter your name...' name='name' value={inputData.name} onChange={handleData}></input>
    </div>
    <div>
        <input type='text' placeholder='Enter your Email...' name='email' value={inputData.email} onChange={handleData}></input>
    </div>
    <div>
        <input type='password' placeholder='Enter your Password...' name='password' value={inputData.password} onChange={handleData}></input>
    </div>
    <button>Register</button>
   </form>
    </>
  )
}

export default Form