import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { getAllDogs } from '../../redux/actions/actionsCreator'
import AtoZ from '../Ordering/AtoZ'
import Weight from '../Ordering/Weight'
import SearchBar from '../SearchBar/SearchBar'
import style from './NavBar.module.css'
function NavBar({setOrder, setPage}) {
  const dispatch = useDispatch();
  function handleReset(e){
    e.preventDefault();
    dispatch(getAllDogs());
    setPage(1);
  }
  return (
    <div className={style.nav}>
      <nav>
        <div className={style.imagenP}>
          <AtoZ setOrder={setOrder}/>
          <Weight setOrder={setOrder}/>
          <button onClick={(e)=> handleReset(e)}>Reset</button>
          
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