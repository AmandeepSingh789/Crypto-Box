import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { SparklinesLine } from 'react-sparklines';
import { Sparklines,Sparkline } from 'react-sparklines';
import { ThemeContext } from '../context/ThemeContext';
import { FaTwitter,FaFacebook,FaReddit,FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { useParams  } from 'react-router-dom';
const MarketPage = () => {

  const {theme,setTheme} = useContext(ThemeContext)  
  const[exchange,setExchange]=useState({})
  const params = useParams()

  const url=`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`
  
    useEffect(()=>{
        axios.get(url).then((response)=>{
          setExchange(response.data)
            console.log(response.data)
        })
    },[url])

  return (
    <div className='rounded-div my-12 py-8 font-Josefin'>
      <div className='flex py-8'>
            <img src={exchange.image} alt="" className='w-20 mx-8 animate-waving-hand hover:animate-none' />
            <div>
                <p className='text-5xl font-bold'>
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
                        <p className='text-accent '>Market Cap</p>
                        {exchange.tickers?.base ? (<p>${exchange.tickers[0]?.base}</p>) : null}
                    </div>

                    {/* <div>
                        <p className='text-accent '>Volume (24h)</p>
                        {exchange.market_data?.market_cap ? (<p>${coexchangein.market_data?.total_volume.usd.toLocaleString()}</p>) : null}
                        
                    </div> */}
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
      </div>
  )
}

export default MarketPage