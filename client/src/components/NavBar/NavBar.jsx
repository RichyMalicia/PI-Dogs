import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { getAllDogs } from '../../redux/actions/actionsCreator'
import FilterOrigin from '../Filter/FilterOrigin'
import FilterTemper from '../Filter/FilterTemper'
import AtoZ from '../Ordering/AtoZ'
import Weight from '../Ordering/Weight'
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
        <Link to='/'>
          <img src={(`https://e7.pngegg.com/pngimages/552/1/png-clipart-dogs-dogs.png`)} alt="Imagen perro"/>
        </Link>
      <nav>
        <div className={style.imagenP}>
          <div className={style.filters}> <AtoZ setOrder={setOrder}/>
          <Weight setOrder={setOrder}/>
          <button className={style.btn} onClick={(e)=> handleReset(e)}>Reset</button>
          <FilterOrigin setOrder={setOrder}/>
          <FilterTemper setOrder={setOrder}/>
          </div>
         
        </div>
        <div>
        <Link to='/home'> HOME </Link>
       
        <Link to='/createDog'> Create Dog </Link>
     </div>
     
      </nav>
        
    </div>
  )
}

export default NavBar