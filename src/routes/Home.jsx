import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Exchanges from '../components/Exchanges'
import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div>
        <CoinSearch coins={coins}/>

        <Trending />
        <Exchanges />
    </div>
  )
}

export default Home