import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs, getTemper } from '../../redux/actions/actionsCreator';
import DogsCards from '../DogsCards/DogsCards'
import NavBar from '../NavBar/NavBar'
import Pagination from '../Pagination/Pagination';

function Home() {
  const dispatch = useDispatch();
  const dogsLoaded = useSelector(state => state.dogsLoaded)
  useEffect(()=>{
    dispatch(getAllDogs())
  }, [dispatch]);
  useEffect(()=>{
    dispatch(getTemper())
  }, [dispatch])
  const [order, setOrder] = useState('');

  return (
    <div>
        
        <NavBar setOrder={setOrder} />
        <DogsCards/>
        {dogsLoaded > 0 ? (
          <div>
            <Pagination/>
            <div>
              <DogsCards dogsLoaded={dogsLoaded} />
            </div>
            <Pagination />
          </div>
        ) : <></>
        }
    </div>
  )
}

export default Home