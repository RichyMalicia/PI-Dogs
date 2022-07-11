import React, {useCallback, useEffect, useState} from 'react';
import DogsCards from '../DogsCards/DogsCards';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading'
import { cleanDetail, getTemper, setPagination } from '../../redux/actions/actionsCreator';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
const dispatch = useDispatch()

  const [loading, setLoading] = useState(true);
  const [/* order */, setOrder] = useState('');
  const [ page , setPage] = useState(1);
  const limpieza = useCallback(()=>{
    dispatch(cleanDetail())
  },[dispatch]);
  useEffect(()=>{
    limpieza();
  }, [limpieza])
  const temps = useCallback(()=>{
    dispatch(getTemper())
  },[dispatch]);
  useEffect(()=>{
    temps();
  }, [temps])
const pagina = useCallback(()=>{
  dispatch(setPagination(1))
},[dispatch]);
useEffect(()=>{
  pagina();
}, [pagina])

  return (
    <div >
      {loading ? <Loading setLoading={setLoading}/> :
       <div>
       <NavBar setOrder={setOrder} setPage={setPage} />    
          <SearchBar/>
            <div>
              
            <DogsCards/>
          </div>
          </div>
}
          </div>    
  )
}
export default Home