import React from 'react'
import {Link} from 'react-router-dom'; 
import ThemeBtn from './ThemeBtn';
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold font-Josefin '>
        <Link to ="/">
            <h1 className='text-3xl font-Edu'>CryptoBox</h1>
        </Link>
        <div>
            <ThemeBtn />
        </div>

        <div>
            <Link to ="/signin">Sign In</Link>
            <Link to ="/signin">Sign Up</Link>
        </div>

        {/*Menu */}

        <div>
            <AiOutlineMenu />
        </div>

        {/* Mobile Menu */}
        <div>
            <ul>
                <li>
                <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to ="/">Account</Link>
                </li>
                <li>
                    <ThemeBtn />
                </li>
            </ul>
            <div>
                <Link to = "/signin">
                    <button>Sign In</button>
                </Link>

                <Link to = "/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar