import React from 'react'
import UserList from '../components/UserList'

const Account = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Account</h1>
          <div>
            <p>
              Welcome, User
            </p>
          </div>
        </div>

        <div>
          <button>Sign Out</button>
        </div>
      </div>
      <div>
        <div>
          <h1>
            Your Box

          </h1>
          <UserList />
        </div>
      </div>
    </div>
  )
}

export default Account