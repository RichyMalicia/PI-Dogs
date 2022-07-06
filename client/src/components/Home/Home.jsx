import React, {useState} from 'react';
import DogsCards from '../DogsCards/DogsCards';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading'
import style from './Home.module.css'

function Home() {

  const [loading, setLoading] = useState(true);
  const [/* order */, setOrder] = useState('');
  const [/* page */, setPage] = useState(1);

  return (
    <div className={style.home}>
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