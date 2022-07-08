import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByHeight } from '../../redux/actions/actionsCreator';
import style from './Ord.module.css'
function Height({setOrder}) {
    const dispatch = useDispatch();

    function handleHeight(e){
        e.preventDefault();
        dispatch(orderByHeight(e.target.value));
        setOrder(e.target.value);
    }
  return (
    <div className={style.filter}>
        <select className={style.filter} onChange={(e)=> handleHeight(e)}>
        <option hidden value=''>Height</option>
                <option value='Lower'> Low - High </option>
                <option value='Higher'> High - Low </option>
           
        </select>
    </div>
  )
}

export default Height