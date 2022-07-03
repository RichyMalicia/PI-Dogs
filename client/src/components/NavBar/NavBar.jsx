import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import style from './NavBar.module.css'
function NavBar() {
  return (
    <div className={style.nav}>
      <nav>
        <div className={style.imagenP}>
        <Link to='/'>
          <img src={(`https://e7.pngegg.com/pngimages/552/1/png-clipart-dogs-dogs.png`)} alt="Imagen perro"/>
        </Link>
        </div>
        <div>
        <Link to='/home'> HOME </Link>
       
        <Link to='/createDog'> Create Dog </Link>
     </div>
     
      </nav>
        <SearchBar/>
    </div>
  )
}

export default NavBar