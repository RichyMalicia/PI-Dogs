import React, { useCallback, useState, useEffect } from 'react'
import { setPagination } from '../../redux/actions/actionsCreator'
 import { useDispatch, useSelector } from 'react-redux' 
 import style from './Pag.module.css'

export default function Pagination() {
  const dispatch = useDispatch()
  const [numPage, setNumPage] = useState(1)
  /*  const dogsFiltered = dogs.slice(numPage, numPage + 8);
  */ 
 const dogs = useSelector(state => state.dogsLoaded)
 const filteredDogs = Math.ceil(dogs.length/8)

  const nextPage = () => {
    if(numPage < filteredDogs) setNumPage ( numPage + 1 );
  }
  const previousPage = () => {
    if(numPage > 1) setNumPage(numPage - 1)
  }
  const firstPage = () => {
    setNumPage(1)
  }
  const lastPage = ()=> {
    setNumPage(filteredDogs)
  }
  const set = useCallback(()=>{
    dispatch(setPagination(numPage));
  }, [numPage, dispatch]);
  useEffect(() => {
    set();
  }, [set])
  
  
    return (
    <div className={style.container}>
        
        <button  onClick={firstPage}>First Page</button>
        <button  onClick={previousPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
      <button onClick={lastPage}>Last Page</button>
      
    </div>
  )
}
