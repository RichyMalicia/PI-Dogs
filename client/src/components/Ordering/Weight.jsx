import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByWeight } from '../../redux/actions/actionsCreator';

function Weight({setOrder}) {
    const dispatch = useDispatch();

    function handleWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setOrder(e.target.value);
    }
  return (
    <div>
        <select onChange={(e)=> handleWeight(e)}>
        <option hidden value=''> Weight order</option>
                <option value='Lower'> Low - High </option>
                <option value='Higher'> High - Low </option>
           
        </select>
    </div>
  )
}

export default Weight