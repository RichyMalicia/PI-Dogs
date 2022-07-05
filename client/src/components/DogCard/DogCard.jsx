import React from 'react'
import { Link } from 'react-router-dom'
import dd from './DogCard.module.css'

function DogCard({id, name, weightMin, weightMax, temperament, img, image}) {
      return (
    <div className={dd.cardDog}>
        <div className={dd.info}><Link to={`/detail/${id}`}><h2 key={id}>{name}</h2></Link>
        <h3>Weight min:{weightMin} - max: {weightMax} kgs.</h3>
        
        <h3>Temperament: </h3><span>{temperament}</span>
        
        </div>
        <div>
        <img src={img? img: "No image"} alt="dogImage"/>
        </div>
    </div>
  )
}

export default DogCard