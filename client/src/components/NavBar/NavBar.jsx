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
        <div className={style.container}>
          <span>Order by:</span>
          <AtoZ className={style.filters} setOrder={setOrder} setPage={setPage}/>
          <Weight className={style.filters} setOrder={setOrder} setPage={setPage}/>
         <button className={style.btn} onClick={(e)=> handleReset(e)}>Reset</button>
         <span>Filter by:</span>
          <FilterOrigin className={style.filters} setOrder={setOrder} setPage={setPage}/>
          <FilterTemper className={style.filters} setOrder={setOrder} setPage={setPage}/>
          <Link  to='/createDog' ><button className={style.create}>Create Dog!</button>  </Link>
          <Link  to='/home' ><button className={style.home}>Home</button>  </Link>
        </div>
        
     
   
   
        
  )
}

export default NavBar