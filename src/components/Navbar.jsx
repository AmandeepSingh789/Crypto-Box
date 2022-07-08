import React from 'react'
import {Link} from 'react-router-dom'; 
import ThemeBtn from './ThemeBtn';
const Navbar = () => {
  return (
    <div>
        <Link to ="/">
            <h1>CryptoBox</h1>
        </Link>
        <div>
            <ThemeBtn />
        </div>

    </div>
  )
}

export default Navbar