import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { getAllDogs, getDogByName } from '../../redux/actions/actionsCreator';
import style from './Search.module.css'
function Search() {
    const [state, setState] = useState("");
    const dispatch = useDispatch();
    function handleChange(e){
        setState(e.target.value);
    };
    function onClick(){
        dispatch(getAllDogs());
    }
    function handleSubmit(e){
        e.preventDefault();
        if(state.length > 3) {
            dispatch(getDogByName(state));
        } else {
            alert("Debes ingresar una raza...")
        };
        setState('');
    }
  return (
    <form className={style.form}>
        <input
        type="text"
        placeholder="Raza..."
        name="raza"
        value={state}
        onClick={onClick}
        onChange={handleChange}
        />
        <button onClick={handleSubmit} value='Buscar'>Buscar</button>
        </form>
  )
}

export default Search