import React, { useContext } from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'
import { ThemeContext } from '../ThemeContext'
const ThemeBtn = () => {

    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div className='p-2'>
        {theme==='dark' ?(
            <div className='flex items-center cursor-pointer hover:text-accent' onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')}>
                <FaSun className='text-primary text-2xl mr-2 '/> Light Mode
            </div>
        ) : (
            <div className='flex items-center cursor-pointer hover:text-accent' onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')}>
                <BsMoonStarsFill className='text-primary text-2xl mr-2'/> Dark Mode
                 </div>
        )}
    </div>
  )
}

export default ThemeBtn