import React, { useCallback, useState, useEffect } from 'react';
import DogCard from '../DogCard/DogCard';
import style from './DogsCards.module.css'
import { getAllDogs } from '../../redux/actions/actionsCreator';
import { useDispatch, useSelector } from 'react-redux';


function DogsCards() { 
  const [ currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const dogsCharged = useSelector(state => state.dogsLoaded);
  const dogsFiltered = dogsCharged.slice(currentPage, currentPage + 8);
  
  const nextPage = () => {
    setCurrentPage ( currentPage + 8 );
  }
  const previousPage = () => {
    if(currentPage > 1) setCurrentPage(currentPage - 8)
  }

    const perros = useCallback(()=>{
      dispatch(getAllDogs())
    },[dispatch]);
    useEffect(()=>{
      perros();
    }, [perros])
    console.log("PERROS  ", dogsCharged)
  return (
    
    <div className={style.DogsCards}>
      <hr />
      <button className='btb btn-primary' onClick={previousPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
       <hr />
        {dogsFiltered.map(d=> {
        return(
        <DogCard 
                id={d.id}
               key={d.id}
               name={d.name}
               img={d.image.url} 
               temperament={d.temperament}
               weight={d.weight.metric}
               height={d.height.metric}
               life_span={d.life_span}
               image={d.image}
               />
        )})}
            </div>
            
        )
        
}

export default DogsCards