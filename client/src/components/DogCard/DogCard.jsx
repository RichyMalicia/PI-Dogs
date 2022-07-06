import React from 'react'
import { Link } from 'react-router-dom'
import style from './DogCard.module.css'

function DogCard({ id, name, weightMin, weightMax, temperament, img, }) {
 
  return (
    <>
    
    <div className={style.cardDog} >
      <div className={style.info}><Link className={style.name} to={`/detail/${id}`}><h2 >{name}</h2>
        <img src={img && img} alt={name} />
        <div className={style.peso}>
        <h3>Weight min: {weightMin} - Weight max: {weightMax} kgs.</h3>
        </div>
        <h3>Temperament: </h3><span>{temperament}</span>
      </Link>
      </div>
      <div>
      </div>
      </div>
   
      </>
  )
  }


export default DogCard