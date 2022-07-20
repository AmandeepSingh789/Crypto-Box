import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'

import { ThemeContext } from '../context/ThemeContext';
import { FaGithub,FaFacebook,FaReddit,FaSlack,FaTwitter,FaGlobe} from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { Link, useParams  } from 'react-router-dom';
const MarketPage = () => {

  const {theme,setTheme} = useContext(ThemeContext)  
  const[exchange,setExchange]=useState({})
  const params = useParams()

  const url=`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`
  
    useEffect(()=>{
        axios.get(url).then((response)=>{
          setExchange(response.data)
            
        })
    },[url])

  return (
    <div className='rounded-div my-12 py-8 font-Josefin'>
      <div className='flex py-8'>
        
            <img src={exchange.image} alt="" className='w-20 mx-8 animate-waving-hand' />
            
            <div className='mx-12 sm:md-0'>
                <p className='text-5xl font-bold '>
                    {exchange?.name} 
                    
                </p>
                <p>{exchange.country}</p>
            </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8 '>
        <div>
          <div className=' flex justify-between '>
                    {exchange.trade_volume_24h_btc ? (<p  className='text-2xl  font-bold'>${exchange.trade_volume_24h_btc.toLocaleString()}</p>
                    ) : null}
                    <p className='text-2xl ml-2'>Volume (24H) BTC</p>
          </div>
          <div className='flex justify-between py-4 text-lg'>
                    <div >
                        <p className='text-accent '>{exchange.description ? (<p>${exchange.description}</p>) : null}</p>
                        
                    </div>

                   
                </div>


        </div>
        <div>
        <p className='text-2xl font-bold'>Exchange Stats</p>
        <div className='flex justify-between py-4 text-lg'>
                        <div>
                            <p className='text-accent '>Centralized</p>
                            {exchange.centralized?.toString()}
                        </div>
                        <div>
                            <p className='text-accent '>Trading Incentive</p>
                            {exchange.has_trading_incentive ? (<p>{exchange.has_trading_incentive?.toString()}</p>) : <p>False</p>}
                        </div>
                        <div>
                        <p className='text-accent '>Trust Score</p>
                        {exchange.trust_score ? (<p>{exchange.trust_score.toFixed(2)}</p>) : null}
                        </div>
                    </div>
        </div>
      </div>
      <div className='flex justify-around p-8 text-accent text-4xl'>
        
        <a href= {exchange?.facebook_url}><FaFacebook className='hover:text-primary cursor-pointer'/></a>
        <a href={exchange?.url}><FaGlobe className='hover:text-primary cursor-pointer'/></a>
        
        <a href={exchange?.reddit_url}>
        <FaReddit className='hover:text-primary cursor-pointer'/>
        </a>
        <a href={exchange?.slack_url}>
        <FaSlack className='hover:text-primary cursor-pointer'/>
        </a>

         </div>
      </div>
  )
}

export default MarketPage