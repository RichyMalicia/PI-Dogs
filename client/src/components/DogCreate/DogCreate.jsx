import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemper, raceCreator } from '../../redux/actions/actionsCreator';
import NavBar from '../NavBar/NavBar';
const ALPHA = /^[a-zA-Z\s]+$/;
function validate(state){
    let errors = {};
    if(!state.name){
        errors.name = "You have to enter a name...";
     } else if (state.name.length < 4){
        errors.name = "The title is invalid. Must be more than 4 characters...";
     } else if(!ALPHA.test(state.name)){
        errors.name = 'Only letters are allowed...';
     }
     if(state.height_min > state.height_max){
        errors.height = "The minimum height cannot be greater than the maximum weight"
     }
     if(state.weight_min > state.weight_max){
        errors.weight = "The minimum height cannot be greater than the maximum weight"
     }
     return errors;
}
function DogCreate() {
    const dispatch = useDispatch();

    const [tempers, setTempers] = useState({
        temperamentos: [
            {id: 0, value: "Stubborn", isChecked: false},
            {id: 1, value: "Curious", isChecked: false},
            {id: 2, value: "Playful", isChecked: false},
            {id: 3, value: "Adventurous", isChecked: false},
            {id: 4, value: "Active", isChecked: false},
            {id: 5, value: "Fun-loving", isChecked: false},
            {id: 6, value: "Aloof", isChecked: false},
            {id: 7, value: "Clownish", isChecked: false},
            {id: 8, value: "Dignified", isChecked: false},
            {id: 9, value: "Independent", isChecked: false},
            {id: 10, value: "Happy", isChecked: false},
        ], 
    });
    const [state, setState] = useState({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        image: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        weight: '',
        height: '',
    });
    const dogTemp = useSelector(state => state.dogsTempers )
  function handleChangeTemper(e){
    let temperamentos = tempers.temperamentos;
    temperamentos.forEach(temp =>{
        if(temp.value === e.target.value){
            temp.isChecked = e.target.checked;
        };
    });
    setTempers({temperamentos: temperamentos,})
  };

  function handleChange(e){
    const { name, value } = e.target;
    setErrors(validate({
        ...state,
        [name]: value
    }));
    setState({
        ...state,
        [name]: value,
    });
  };
  function handleSubmit(e){
    e.preventDefault();
    const data = {state, tempers};
    dispatch(raceCreator(data));
    console.log(data);
    setState({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        image: '',
    });
    setErrors({
        name: '',
        weight: '',
        height: '',
    });
    setTempers({
         temperamentos: [
            {id: 0, value: "Stubborn", isChecked: false},
            {id: 1, value: "Curious", isChecked: false},
            {id: 2, value: "Playful", isChecked: false},
            {id: 3, value: "Adventurous", isChecked: false},
            {id: 4, value: "Active", isChecked: false},
            {id: 5, value: "Fun-loving", isChecked: false},
            {id: 6, value: "Aloof", isChecked: false},
            {id: 7, value: "Clownish", isChecked: false},
            {id: 8, value: "Dignified", isChecked: false},
            {id: 9, value: "Independent", isChecked: false},
            {id: 10, value: "Happy", isChecked: false},
        ], 
    });
  };

   const get = useCallback(()=>{   
    dispatch(getTemper());
}, [dispatch]); 

  useEffect(()=>{
    get();   
  }, [get])

    return (
        
    <>
    <NavBar/>
    <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type='text' id='name' name='name' value={state.name} onChange={handleChange}/>
        {errors.name && (<p>{errors.name}</p>)}
        <label>Height: </label>
        <input type="number" id='height' name='height' value={state.height} onChange={handleChange} min="1" max="100" step="1"/>
        {/* <label>Height max: </label>
        <input type="number" id='height_max' name='height_max' value={state.height.height_max} onChange={handleChange} min="1" max="100" step="1"/>
         */}<label>Weight: </label>
        <input type="number" id='weight' name='weight' value={state.weight} onChange={handleChange} min="1" max="100" step="1"/>
        {/* <label>Weight max: </label>
        <input type="number" id='weight_max' name='weight_max' value={state.weight.weight_max} onChange={handleChange} min="1" max="100" step="1"/>
        */} <label>Life span: </label>
        <input type='number' id='life_span' name='life_span' value={state.life_span} onChange={handleChange} min="1" max="100" step="1" />
        <label>Image:</label>
        <input type="text" id='image' name='image' value={state.image} onChange={handleChange} />
        
        <label>Temperaments: </label>
        {dogTemp.map(temp=>{
            return(
                <div key={temp.id}>
                    <input
                    type='checkbox'
                    id={temp.name}
                    name={temp.name}
                    value={temp.name}
                    onChange={handleChangeTemper}
                    />
                    <label>{temp.name}</label>
                </div>
            );
        })
        }
        <button type='submit'>Create</button>
    </form>
    </>
  )
}

export default DogCreate