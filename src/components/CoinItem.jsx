import React, { useContext } from 'react'
import {BsCoin} from 'react-icons/bs'
import { SparklinesLine } from 'react-sparklines';
import { Sparklines,Sparkline } from 'react-sparklines';
import { ThemeContext } from '../ThemeContext'
import { Link } from 'react-router-dom';
const CoinItem = ({coin}) => {

    const {theme,setTheme} = useContext(ThemeContext)
  return (
    
        <tr className='h-[80px] border-b overflow-hidden text-xl group'>

            <td><BsCoin size={30} className='mr-2'/></td>
            <td>{coin.market_cap_rank}</td>
            <td>
                <Link to={`/coin/${coin.id}`}>
                    <div className='flex items-center mx-2'>
                    <img src={coin.image} alt={coin.id} className='w-6 mr-2 rounded-full animate-waving-hand group-hover:animate-none' />
                    <p className='hidden md:table-cell ml-2'>{coin.name}</p>
                </div>
            </Link></td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>$ {coin.current_price.toLocaleString()} </td>
            <td>{coin.price_change_percentage_24h > 0 ? (<p className='text-green-600'>{coin.price_change_percentage_24h.toFixed(2)}</p>) : (<p className='text-red-600'>{coin.price_change_percentage_24h.toFixed(2)}</p>)}
                </td>
            <td className='w-[180px] hidden md:table-cell'>$ {coin.total_volume.toLocaleString()}</td>
            <td className='w-[180px] hidden md:table-cell'>$ {coin.market_cap.toLocaleString()}</td>
            <td><Sparklines data={coin.sparkline_in_7d.price}>

            {theme==='dark' ? (<SparklinesLine color="#E79E4F" />) :
                (<SparklinesLine color="#d06d6d
                " />)}
                </Sparklines></td>
            </tr>
    
  )
}

export default CoinItem