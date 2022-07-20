import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { SparklinesLine } from 'react-sparklines';
import { Sparklines,Sparkline } from 'react-sparklines';
import { ThemeContext } from '../context/ThemeContext';
import { FaForumbee,FaFacebook,FaReddit,FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { useParams  } from 'react-router-dom';
const CoinPage = () => {

    const {theme,setTheme} = useContext(ThemeContext)  
    const[coin,setCoin]=useState({})
    const params = useParams()

    const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`
  
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoin(response.data)
            console.log(response.data)
        })
    },[url])
    return (
    <div className='rounded-div my-12 py-8 font-Josefin'>
        <div className='flex py-8'>
            <img src={coin.image?.large} alt="" className='w-20 mr-8 animate-waving-hand' />
            <div>
                <p className='text-5xl font-bold'>
                    {coin?.name} Price
                </p>
                <p>({coin.symbol?.toUpperCase()}/USD)</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
            <div> 
                <div className='flex justify-between'>
                    {coin.market_data?.current_price ? (<p  className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>
                    ) : null}
                    <p className='text-3xl'>7 Day </p>
                </div>
                <div className='mt-4'>
                    <Sparklines data={coin.market_data?.sparkline_7d.price}>
                    {theme==='dark' ? (<SparklinesLine color="#E79E4F" />) :
                (<SparklinesLine color="#d06d6d
                " />)}
                    </Sparklines>
                </div>

                <div className='flex justify-between py-4 text-lg'>
                    <div >
                        <p className='text-accent '>Market Cap</p>
                        {coin.market_data?.market_cap ? (<p>${coin.market_data?.market_cap.usd.toLocaleString()}</p>) : null}
                    </div>

                    <div>
                        <p className='text-accent '>Volume (24h)</p>
                        {coin.market_data?.market_cap ? (<p>${coin.market_data?.total_volume.usd.toLocaleString()}</p>) : null}
                        
                    </div>
                </div>

                <div className='flex justify-between py-4 text-lg'>
                    <div>
                        <p className='text-accent '>24H High</p>
                        {coin.market_data?.high_24h ? (<p>${coin.market_data?.high_24h.usd.toLocaleString()}</p>) : null}
                    </div>
                    <div>
                        <p className='text-accent '>24H Low</p>
                        {coin.market_data?.low_24h ? (<p>${coin.market_data?.low_24h.usd.toLocaleString()}</p>) : null}
                    </div>
                </div>
            </div>

                <div>
                    <p className='text-3xl font-bold'>Market Stats</p>
                    <div className='flex justify-between py-4 text-lg'>
                        <div>
                            <p className='text-accent '>Market Rank</p>
                            {coin.market_cap_rank}
                        </div>
                        <div>
                            <p className='text-accent '>Hashing Algorithm</p>
                            {coin.hashing_algorithm ? (<p>{coin.hashing_algorithm}</p>) : null}
                        </div>
                        <div>
                        <p className='text-accent '>Trust Score</p>
                        {coin.tickers ? (<p>{coin.liquidity_score.toFixed(2)}</p>) : null}
                        </div>
                    </div>

                    <div className='flex justify-between py-4 text-lg'>
                        <div>
                            <p className='text-accent '>Price Change(24h)</p>
                            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text-accent '>Price Change(7d)</p>
                            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text-accent '>Price Change(14d)</p>
                            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>) : null}
                        </div>
                    </div>

                    <div className='flex justify-between py-4 text-lg'>
                        <div>
                            <p className='text-accent '>Price Change(30d)</p>
                            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text-accent'>Price Change(60d)</p>
                            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>) : null}
                        </div>
                        <div>
                            <p className='text-accent '>Price Change(1y)</p>
                            {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>) : null}
                        </div>
                    </div>

                    <div className='flex justify-around p-8 text-accent text-4xl'>
                        <a href={coin.links?.subreddit_url}><FaReddit className='hover:text-primary cursor-pointer'/></a>
                        <a href={coin.links?.official_forum_url[0]}><FaForumbee className='hover:text-primary cursor-pointer'/></a>
                        
                        <FaFacebook className='hover:text-primary cursor-pointer'/>
                        <a href={coin.links?.repos_url?.github[0]}><FaGithub className='hover:text-primary cursor-pointer'/></a>
                        

                    </div>
                </div>
        </div>

        <div className='py-4'>
            <p className='text-5xl font-bold mb-4'>About {coin.name}</p>
            <p className='text-lg' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>
        </div>
    </div>
  )
}

export default CoinPage