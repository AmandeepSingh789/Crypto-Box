import React from 'react'
import UserList from '../components/UserList'

const Account = () => {
  return (
    <div className='max-w-[1140px] mx-auto font-Josefin'>
      <div className='flex justify-between items-center py-8 my-12 rounded-div'>
        <div>
          <h1 className='text-4xl font-bold'>Account</h1>
          <div>
            <p>
              Welcome, User
            </p>
          </div>
        </div>

        <div>
          <button className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-3xl hover:text-accent'>Sign Out</button>
        </div>
      </div>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h1 className='text-2xl font-bold py-4'>
            Your Box

          </h1>
          <UserList />
        </div>
      </div>
    </div>
  )
}

export default Account