import React, { useCallback,  useEffect } from 'react';
import DogCard from '../DogCard/DogCard';
import style from './DogsCards.module.css'
import { cleanDetail, getAllDogs } from '../../redux/actions/actionsCreator';
import { useDispatch, useSelector } from 'react-redux';



function DogsCards() { 

  const dispatch = useDispatch();
  const numPage = useSelector(state => state.numPage)
  const dogsCharged = useSelector(state => state.dogsLoaded);
  /* const dogsFiltered = dogsCharged.slice(numPage, numPage + 8);
  */ 

const grupo = 8;
let finalCount = numPage * grupo;
let initialCount = finalCount - grupo;
let filteredDogs = dogsCharged.slice(initialCount, finalCount)
  

    const perros = useCallback(()=>{
      dispatch(getAllDogs())
    },[dispatch]);
    useEffect(()=>{
      perros();
      cleanDetail();
    }, [perros])
  
  return (
    
    <div className={style.DogsCards}>
     
        {filteredDogs.map(d=> {
        return(
          
        <DogCard 
                id={d.id}
               key={d.id}
               name={d.name}
               img={d.image} 
               temperament={d.temperament}
               weightMin={d.weightMin}
               weightMax={d.weightMax}
               heightMin={d.heightMin}
               heightMax={d.heightMax}
               life_spanMin={d.life_spanMin}
               life_spanMax={d.life_spanMax}
               
               />
              
        )})}
            </div>
            
        )
        
}

export default DogsCards