import React from 'react'

const CoinSearch = ({coins}) => {

    console.log(coins)
  return (
    <div>
        <div>
        <h1>Search Crypto </h1>
        <form >
            <input type="text" placeholder='Search A Coin' />
        </form>
        </div>

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>24h Volume</th>
                    <th>Market</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default CoinSearch