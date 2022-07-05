import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { getDogByName, setPagination} from '../../redux/actions/actionsCreator';
/* import style from './Search.module.css' */


export default function Search(){

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        setName('');
        setName(e.target.value)
    }
    function handleEnter(e){
        if (e.key === "Enter"){
            handleSubmit(e);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            alert('Please, enter a name')
        } else{
            dispatch(getDogByName(name));
            setName('');
            setPagination(1);
            
        }
    }

    return(
        <div >
            <div >
                <input type='text' placeholder={'Search a dog...'}
                value={name} onKeyPress={handleEnter} 
                onChange={(e) => handleSearch(e)}
                />
                <button type='Submit' 
                onClick={(e) =>handleSubmit(e)}
                >Search</button>
            </div>
        </div>
    )
}