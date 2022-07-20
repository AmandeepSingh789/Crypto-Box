import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Trending = () => {
    const [trending,setTrending]=useState([]);
    const url ='https://api.coingecko.com/api/v3/search/trending';
 
    useEffect(()=> {
  
      axios.get(url).then((response)=>{
        setTrending(response.data.coins)
      })
    },[url])

  return (
    <div> 
        <div className='font-Josefin rounded-div my-12 py-8 text-primary '>
            <h1 className='text-4xl font-bold mb-8 ml-4 '>Trending Coins</h1>
            <div className='  grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {trending.map((coin,idx)=>(
                    <div key={idx} className=' group rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300 '>
                        <div className='flex w-full items-center justify-between'>
                            <Link to={`/coin/${coin.item.id}`}>
                              <div className='flex '>
                                  <img src={coin.item.small} alt={coin.item.id} className='mr-2 rounded-full animate-waving-hand group-hover:animate-none'/>
                                  <div>
                                      <p className='font-bold text-xl'>{coin.item.name}</p>
                                      <p>{coin.item.symbol}</p>
                                  </div>
                              </div>
                            </Link>
                            <div className='flex items-center'>
                            <img className='w-4 mr-2'
                            src="https:assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="/"  />
                            <p>{coin.item.price_btc.toFixed(7)}</p>
                            </div>
                        </div>
                            
                    
                        </div>

                ))}
            </div>
        </div>
        </div>
  )
}

export default Trending