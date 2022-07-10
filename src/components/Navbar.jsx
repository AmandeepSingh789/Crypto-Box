import React,{useState} from 'react'
import {Link} from 'react-router-dom'; 
import ThemeBtn from './ThemeBtn';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {

    const [nav,setNav]=useState(false)

    const toggleNav =()=> {
    setNav(!nav)
    }

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold font-Josefin '>
        <Link to ="/">
            <h1 className='text-4xl font-Edu'>CryptoBox</h1>
        </Link>
        <di className='hidden md:block text-2xl'>
            <ThemeBtn />
        </di>

        <div className='hidden md:block'>
            <Link to ="/signin" className='p-4 hover:text-accent text-2xl'>Sign In</Link>
            <Link to ="/signin" className='  bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl text-2xl'>Sign Up</Link>
        </div>

        {/*Menu */}

        <div  onClick = {toggleNav} className='block md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
        </div>

        {/* Mobile Menu */}
        <div className={nav? 'md:hidden fixed  left-0 top-20 flex flex-col items-center justify-around w-full h-[90%] bg-primary ease-in duration-300 z-10 font-xl' : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-around ease-in duration-300'}>
            <ul className='w-full p-4'>
                <li className='border-b py-6 text-2xl'>
                <Link to ="/" className='hover:text-accent'>Home</Link>
                </li>
                <li className='border-b py-6 text-2xl'>
                <Link to ="/" className='hover:text-accent'>Account</Link>
                </li>
                <li className='border-b py-6 text-2xl'>
                    <ThemeBtn />
                </li>
            </ul>
            <div className='flex flex-col w-full p-4 text-2xl'>
                <Link to = "/signin" className=' '>
                    <button className=' w-full hover:text-accent my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Sign In</button>
                </Link>

                <Link to = "/signup">
                    <button  className=' w-full my-2 p-3 bg-button text-btnText  rounded-2xl shadow-xl'>Sign Up</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar