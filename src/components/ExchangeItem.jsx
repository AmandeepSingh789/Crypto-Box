import React from 'react'
import {AiOutlineTransaction} from 'react-icons/ai'
import Exchanges from './Exchanges'
const ExchangeItem = ({exchange}) => {
  return (
    
    <tr className='h-[80px] border-b overflow-hidden text-xl group'>
        <td><AiOutlineTransaction size={35} className=' mt-2' /></td>
        <td >{exchange.trust_score_rank}</td>
        <td className='mx-20'>
            <div className='flex items-center ml-12' >
            <img src={exchange.image} alt=" /" className=' w-6 rounded-full mt-2 ml-4 animate-waving-hand group-hover:animate-none'
        />
                <a href={exchange.url} target="_blank">
                    <p className='ml-4 '>
                    
                    {exchange.name }
                    </p>
                </a>
            </div>

        </td>

        <td>
            {exchange.year_established ? (<p>{exchange.year_established}</p>) : (<p>Not Revealed</p>)}
        </td>
        <td className='hidden md:table-cell'>$ {exchange.trade_volume_24h_btc.toLocaleString()}</td>
    </tr>
  )
}

export default ExchangeItem