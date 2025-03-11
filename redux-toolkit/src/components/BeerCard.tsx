import React from 'react'
import { IBeer } from '../interfaces/beer.interface'
import { useNavigate } from 'react-router-dom'

interface BeerCardProps{
    beer: IBeer
}

const BeerCard:React.FC<BeerCardProps> = ({ beer: {id, name, street}}) => {

    const navigate = useNavigate()

  return (
    <div  className='beer-card' onClick={() => navigate(`/beers/${id}`)}>
        <h3>{name}</h3>
        <p>{street}</p>
    </div>
  )
}

export default BeerCard