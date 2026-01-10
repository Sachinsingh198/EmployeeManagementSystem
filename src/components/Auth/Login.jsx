import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("")
  const [passward, setPassward] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted")
    console.log("Your email is : ", email)
    console.log("Your Passward is : ", passward)

    setEmail("")
    setPassward("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>

        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
              onSubmit={ (e) => {
                submitHandler(e)
              }}
             className='flex flex-col items-center justify-center'>
                <input  
                value={email}
                onChange={(e) =>{
                  setEmail(e.target.value);
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full px-4 py-4 text-xl placeholder:text-gray-400' type="email" placeholder="Enter your Email"/>
                
                <input 
                value={passward}
                onChange={(e) =>{
                  setPassward(e.target.value);
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 mt-3 rounded-full px-4 py-4 text-xl placeholder:text-gray-400'type='password' placeholder='Enter passward'/>
                <button className='mt-5 text-white border-none outline-none bg-emerald-600 rounded-full px-4 py-3 text-xl hover:bg-emerald-700 w-full'>Log in</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login