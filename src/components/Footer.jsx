import React from 'react'
import ThemeBtn from './ThemeBtn'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook,FaGithub,FaTiktok,FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary font-Josefin'>
        <div className='grid md:grid-cols-2'> 
            <div className='flex justify-evenly w-full md:max-w[300px] uppercase'>
                <div>
                    <h1 className='font-bold text-2xl'>Support</h1>
                    <ul>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>Help Center</li>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>Contact Us</li>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>API Status</li>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Info</h1>
                    <ul>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>About Us</li>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>Careers</li>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>Invest</li>
                        <li className='text-lg py-2 hover:text-accent cursor-pointer'>Legal</li>
                    </ul>
                </div>
            </div>

            <div className=' text-right'>
                <div className='w-full flex justify-end'>
                    <div className='w-full md:w-[300px] py-4 relative'>
                        <div className='text-3xl flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt[-1rem]'>
                            <ThemeBtn /> 
                        </div>
                        <p className='text-center md:text-right text-2xl font-bold '>Sign up for our Newsletter</p>
                        <div className='py-4'>
                        <form >
                            <input className=' text-center bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type="email" placeholder='Enter your Email' />
                            <button className='text-center bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign Up</button>
                        </form>
                        </div>
                        <div className='flex py-4 justify-between text-accent text-3xl'>
                        <AiOutlineInstagram className='hover:text-primary cursor-pointer text-4xl'/>
                        <FaTiktok className='hover:text-primary cursor-pointer'/>
                        <FaTwitter className='hover:text-primary cursor-pointer'/>
                        <FaGithub className='hover:text-primary cursor-pointer'/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <p className='text-center text-lg py-4'>Powered By CoinGecko</p>
    </div>
  )
}

export default Footer