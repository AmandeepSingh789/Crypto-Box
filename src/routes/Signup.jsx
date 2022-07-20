import React, { useState } from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext' 

const Signup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const {signUp}=UserAuth()
  const navigate = useNavigate();
  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    setError('')
    try{
        await signUp(email,password)
        navigate('/account')
    }
    catch (e) {
      setError(e.message)
      console.log(e.message)
      alert("e.message")
    }

  }

  return (
    <div>
      <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20 font-Josefin'>
        <h1 className='text-4xl font-bold'>Sign Up</h1>
        {
          error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null
        }
        <form onSubmit={handleSubmit}>
          <div className='my-4 text-lg'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input 
              onChange={(e)=> setEmail(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl shadow-xl' type="email" />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4 text-lg'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input 
              onChange={(e)=> setPassword(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl shadow-xl' type="password" />
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