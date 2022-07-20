import React, { useContext } from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
const ThemeBtn = () => {

    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div className='p-2'>
        {theme==='dark' ?(
            <div className='flex items-center cursor-pointer hover:text-accent' onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')}>
                <FaSun className=' animate-pulse text-primary text-2xl mr-2 fill-[#E79E4F] '/> Light Mode
            </div>
        ) : (
            <div className='flex items-center cursor-pointer hover:text-accent' onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')}>
                <BsMoonStarsFill className='animate-pulse text-primary text-2xl mr-2 fill-[#F47C7C]'/> Dark Mode
                 </div>
        )}
    </div>
  )
}

export default ThemeBtn