import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [coins,setCoins]=useState([])

  return (
    <div className='font-Josefin'> 
        {coins.length===0 ? (<p>
            You don't have any coins saved. Please save a coin to add it to your Box.  
        <Link to="/"> Click Here To Search Coins.</Link>
        </p>) : (
            <table className='w-full border-collapse'>
                <thead>
                    <tr>
                        <th>Rank #</th>
                        <th>Coin</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin)=>(
                        <tr key={coin.id}>
                            <td>{coin?.rank}</td>
                            <td><Link to={`/coin/${coin.id}`}>
                                <div>
                                    <img src={coin?.image} alt="/" />
                                    <div>
                                        <p>{coin?.name}</p>
                                        <p>{coin?.symbol.toUpperCase()}</p>
                                    </div>
                                </div>
                                </Link>
                                </td>
                                <td>
                                    <AiOutlineClose className='cursor-pointer' />
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default UserList