import React, { useState } from 'react'
import {BsCoin} from 'react-icons/bs'
import { SparklinesLine } from 'react-sparklines';
import { Sparklines,Sparkline } from 'react-sparklines';
import CoinItem from './CoinItem';
const CoinSearch = ({coins}) => {

    const [searchText,setSearchText]=useState('')
  return (
    <div className='rounded-div my-4 font-Josefin' >
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2 mx-2'>Top 10 Cryptos </h1>
        <form >
            <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder='Search A Coin' className=' text-center w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl '/>
        </form>
        </div>

        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b text-lg'>
                    <th className='px-4'></th>
                    <th>#</th>
                    <th className='text-center'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Market</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {
                    coins.filter((value)=>{
                        if(searchText ===''){
                            return value
                        }
                        else if(
                            value.name.toLowerCase().includes(searchText.toLowerCase())
                        ){
                            return value
                        }
                    }).map((coin)=>(
                        <CoinItem coin={coin} key={coin.id} />
                    ))
                }
            </tbody>
        </table>
    </div>
  );
};

export default CoinSearch