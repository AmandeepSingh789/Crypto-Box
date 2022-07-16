import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
      <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20 font-Josefin'>
        <h1 className='text-4xl font-bold'>Sign Up</h1>
        <form >
          <div className='my-4 text-lg'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl shadow-xl' type="email" />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4 text-lg'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl shadow-xl' type="password" />
              <AiFillLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <button className=' text-lg w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl hover:text-primary'>
            Sign Up
          </button>
        </form>
        <p className='text-lg my-4 text-center'>Already have an account ? <Link to='/signin' className='text-accent'> Sign In</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Signup