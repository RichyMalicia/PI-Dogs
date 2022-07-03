import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs, orderByName, orderByWeight } from '../../redux/actions/actionsCreator';

function AtoZ() {
    const dispatch = useDispatch();
    const dogsLoaded = useSelector(state => state.dogsLoaded);
    function handleChange(e){
        const value = e.target;
        if(value === 'default') dispatch(getAllDogs());
        if(value === 'aZ'  || value === 'zA') dispatch(orderByName(dogsLoaded, value));
        if(value === 'menor' || value === 'mayor') dispatch(orderByWeight(dogsLoaded, value));
    }
  return (
    <div>
        <label> Order By: </label>
        <select
        name='order'
        id='order'
        onChange={handleChange}>
            <option value='default'>Default</option>
            <optgroup label="Name">
                <option value='aZ'> A - Z</option> 
                <option value='zA'> Z - A</option> 
            </optgroup>
            <optgroup label='Weight'>
                <option value='menor'> Low - High </option>
                <option value='mayor'> High - Low </option>
            </optgroup>
        </select>
        
        </div>
    
  )
}

export default AtoZ