import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>

        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full px-4 py-4 text-xl placeholder:text-white' type="email" placeholder="Enter your Email"/>
                <input className='text-black outline-none bg-transparent border-2 border-emerald-600 mt-3 rounded-full px-4 py-4 text-xl placeholder:text-white'type='password' placeholder='Enter passward'/>
                <button className='text-white border-none outline-none bg-emerald-600 mt-3 rounded-full px-4 py-4 text-xl placeholder:text-white'>Log in</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login