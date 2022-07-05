import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByName } from '../../redux/actions/actionsCreator';

function AtoZ({setOrder}) {
    const dispatch = useDispatch();
    
    function handleName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
         setOrder(e.target.value); 
    }
  return (
    <div>
        <label> Order By: </label>
        
            
            <select onChange={(e)=> handleName(e)}>
        <option hidden value=''> Name order</option>
                <option value='A - Z'> A - Z </option>
                <option value='Z - A'> Z - A </option>
           
        
        </select>
        
        </div>
    
  )
}

export default AtoZ