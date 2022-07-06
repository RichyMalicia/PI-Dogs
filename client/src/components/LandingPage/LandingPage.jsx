import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './LandingPage.module.css'

function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.imgCont}>
      <img src='https://s1.1zoom.me/big0/896/Dogs_Many_White_background_Puppy_Bulldog_Spaniel_565687_1280x512.jpg' alt='Perritos' />
      
     
      <div className={style.text}>
<h1>Welcome to Henry Dogs!</h1>
      <NavLink to="/home">Home</NavLink>
      </div>
      </div>
      </div>
  )
}

export default LandingPage