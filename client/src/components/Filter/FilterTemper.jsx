import React from 'react'
import { useDispatch } from 'react-redux';
import { filterT } from '../../redux/actions/actionsCreator';
import style from './Filter.module.css'

function FilterTemper({setPage}) {
    const dispatch = useDispatch();
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
                <option value='Api'> Api </option>
                <option value='Db'> Db </option>
        
            </select>
    </div>
  )
}


export default FilterTemper