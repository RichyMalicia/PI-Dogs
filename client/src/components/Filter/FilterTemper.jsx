import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterT } from '../../redux/actions/actionsCreator';
import style from './Filter.module.css'

function FilterTemper({setPage}) {
    const dispatch = useDispatch();
    const temps = useSelector(state => state.dogsTempers)
    function handleTemp(e){
        e.preventDefault();
        dispatch(filterT(e.target.value));
        setPage(1);
    }
  return (
    <div className={style.filter}>
        <select className={style.filter} onChange={(e)=> handleTemp(e)}>
                <option hidden value=''> Temper</option>
                <option value='All'> All </option>
               {temps.map((tem)=> (
                <option value={tem.name} key={tem.id}>{tem.name}</option>
               ))}
        
            </select>
    </div>
  )
}


export default FilterTemper