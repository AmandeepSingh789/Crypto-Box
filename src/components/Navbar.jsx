import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'; 
import ThemeBtn from './ThemeBtn';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

    const [nav,setNav]=useState(false)

    const {user,logout} =UserAuth()

    const navigate=useNavigate();

    const toggleNav =()=> {
    setNav(!nav)
    }

    const handleSignOut = async () => {
        try{
          await logout()
          navigate('/')
        }
        catch (e){
          console.log(e.message)
        }
      }

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold font-Josefin '>
        <Link to ="/">
            <h1 className='text-4xl font-Edu mx-4 '>CryptoBox</h1>
        </Link>
        <div className='hidden md:block text-2xl'>
            <ThemeBtn />
        </div>

         
        {user?.email ? (<div className='hidden md:block'> 
            <Link to ="/account" className='p-4 hover:text-accent text-2xl'>
                Account
            </Link>

            <button onClick={handleSignOut} className='bg-button text-btnText px-2 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl text-xl mx-4'>Sign Out</button>
            </div>) :
            
            (<div className='hidden md:block'>
            <Link to ="/signin" className='p-4 hover:text-accent text-2xl'>Sign In</Link>
            <Link to ="/signup" className='  bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl text-2xl mx-4'>Sign Up</Link>
        </div>)}

        {/*Menu */}

        <div  onClick = {toggleNav} className='block md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
        </div>

        {/* Mobile Menu */}
        <div className={nav? 'md:hidden fixed  left-0 top-20 flex flex-col items-center justify-around w-full h-[90%] bg-primary ease-in duration-300 z-10 font-xl' : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-around ease-in duration-300'}>
            <ul className='w-full p-4'>
                <li onClick={toggleNav} className='border-b py-6 text-2xl'>
                <Link to ="/" className='hover:text-accent'>Home</Link>
                </li>
                <li onClick={toggleNav}  className='border-b py-6 text-2xl'>
                <Link to ="/account" className='hover:text-accent'>Account</Link>
                </li>
                <li className='border-b py-6 text-2xl'>
                    <ThemeBtn />
                </li>
            </ul>
            <div className='flex flex-col w-full p-4 text-2xl'>
                

                {user?.email ? (<div>

                    <button  onClick={handleSignOut} className=' w-full my-2 p-3 bg-button text-btnText  rounded-2xl shadow-xl'>Sign Out</button>
                </div>) :

                (<div>
                    <Link onClick={toggleNav}  to = "/signin" className=' '>
                    <button className=' w-full hover:text-accent my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Sign In</button>
                </Link>
                <Link onClick={toggleNav}  to = "/signup">
                    <button  className=' w-full my-2 p-3 bg-button text-btnText  rounded-2xl shadow-xl'>Sign Up</button>
                </Link>
                    </div>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar