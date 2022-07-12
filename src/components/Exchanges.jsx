import React,{useState,useEffect} from 'react'
import axios from "axios";

const Exchanges = () => {
    const [markets,setMarkets]=useState([]);
    const url ='https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1';
 
    useEffect(()=> {
  
      axios.get(url).then((response)=>{
        setMarkets(response.data)
        console.log(response.data)
      })
    },[])

  return (
    <div className='font-Josefin rounded-div my-12 py-8 text-primary '>
        <h1 className='font-bold text-4xl my-12'>Top Markets</h1>

        <div>
            {/* {markets.map((market)(
                <div>
                    <h1>{market.name}</h1>
                    </div>
            ))} */}

            {markets.map((coin)=>(
                    <div>
                    <h1>{coin.name}</h1>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Exchanges