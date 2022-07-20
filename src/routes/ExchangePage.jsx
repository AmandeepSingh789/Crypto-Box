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
  const[coin,setCoin]=useState({})
  const params = useParams()

// const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

  const url=`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`
  
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoin(response.data)
            console.log(response.data)
        })
    },[url])

  return (
    <div>
      <h1>fuahfgoa</h1>
    </div>
  )
}

export default MarketPage