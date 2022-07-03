import React from 'react'
import { Link } from 'react-router-dom'
import dd from './DogCard.module.css'

function DogCard({id, name, weight, temperament, img, image}) {
      return (
    <div className={dd.cardDog}>
        <div className={dd.info}><Link to={`/detail/${id}`}><h2>{name}</h2></Link>
        <h3>Weight: <span>{weight}</span> kgs.</h3>
        <hr/>
        <h3>Temperament: </h3><span>{temperament}</span>
        <hr/>
        </div>
        <img src={img? img : image} alt="dogImage"/>
    </div>
  )
}

export default DogCard