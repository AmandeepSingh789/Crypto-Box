import React, { useState } from 'react'
import {BsCoin} from 'react-icons/bs'
import { SparklinesLine } from 'react-sparklines';
import { Sparklines,Sparkline } from 'react-sparklines';
import CoinItem from './CoinItem';
const CoinSearch = ({coins}) => {

    const [searchText,setSearchText]=useState('')
  return (
    <div>
        <div>
        <h1>Search Crypto </h1>
        <form >
            <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder='Search A Coin' />
        </form>
        </div>

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>24h Volume</th>
                    <th>Market</th>
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
  )
}

export default CoinSearch