import React,{useState,useEffect} from 'react'
import axios from "axios";
import ExchangeItem from './/ExchangeItem'

const Exchanges = () => {
    const [markets,setMarkets]=useState([]);
    const url ='https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1';
 
    useEffect(()=> {
  
      axios.get(url).then((response)=>{
        setMarkets(response.data)
       
      })
    },[])

  return (
    <div className='font-Josefin rounded-div my-12 py-8 text-primary '>
        <h1 className='font-bold text-4xl my-12'>Top 10 Markets</h1>

        <div>
        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b text-lg'>
                    <th className='px-4'></th>
                    <th>#</th>
                    <th className='text-center'>Exchange</th>
                    
                    <th>Year Estabished</th>
                    
                    <th className='hidden md:table-cell'>24h Trade Volume (BTC)</th>
                    
                </tr>
            </thead>
            
        <tbody>
            {markets.map((exchange)=>(

                
                    <ExchangeItem exchange={exchange} key={exchange.id} />   
                
                    // <div>
                    // <h1>{exchange.name}</h1>
                    // <a href={exchange.url} target="_blank">
                    //     <img src={exchange.image} alt="" className='rounded-full animate-waving-hand' />
                    // </a>
                    // </div>
                ))}
</tbody>
</table>
        </div>
    </div>
  )
}

//                 {
//                     coins.filter((value)=>{
//                         if(searchText ===''){
//                             return value
//                         }
//                         else if(
//                             value.name.toLowerCase().includes(searchText.toLowerCase())
//                         ){
//                             return value
//                         }
//                     }).map((coin)=>(
//                         <CoinItem coin={coin} key={coin.id} />
//                     ))
//                 }
//             </tbody>
//         </table>

export default Exchanges