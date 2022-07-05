import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTemper, raceCreator } from '../../redux/actions/actionsCreator';
/* import NavBar from '../NavBar/NavBar'; */

function validate(input) {
    var errors = {};
  
  
    if (!input.name || !/^[A-Za-z\s]+$/g.test(input.name)){
      errors.name = "Only letters are allowed";
  }
  if(!input.heightMin || !/^[1-9]\d*(\.\d+)?$/.test(input.heightMin)){
      errors.heightMin = 'Only numbers are allowed';
  }
  if(!input.heightMax || !/^[1-9]\d*(\.\d+)?$/.test(input.heightMax)){
      errors.heightMax = 'Only numbers are allowed';
  }
  if(parseInt(input.heightMax) <= parseInt(input.heightMin)){
      errors.heightMin = 'Min value must to be lower than max valur';
  }
  if(!input.weightMin || !/^[1-9]\d*(\.\d+)?$/.test(input.weightMin)){
      errors.weightMin = 'Only numbers are allowed';
  }
  if(!input.weightMax || !/^[1-9]\d*(\.\d+)?$/.test(input.weightMax)){
      errors.weightMax = 'Only numbers are allowed';
  }
  if(parseInt(input.weightMax) <= parseInt(input.weightMin)){
      errors.weightMin = 'Min value must to be lower than max valur';
  }
  if(!input.lifespanMin || !/^[1-9]\d*(\.\d+)?$/.test(input.lifespanMin)){
      errors.lifespanMin = 'Only numbers are allowed';
  }
  if(!input.lifespanMax || !/^[1-9]\d*(\.\d+)?$/.test(input.lifespanMax)){
  errors.lifespanMax = 'Only numbers are allowed';
  }
  if(parseInt(input.lifespanMax) <= parseInt(input.lifespanMin)){
      errors.lifespanMin = 'Min value must to be lower than max valur';
  }
  if (input.image && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.image) ){
      errors.image = 'Only URL or empty are allowed';
  }
  return errors
  }
function DogCreate() {
    const [ input, setInput] = useState({
        name: '',
        weightMin: '',
        weightMax: '',
        heightMin: '',
        heightMax: '',
        life_spanMin: '',
        life_spanMax: '',
        image: '',
        temperament: []
    })
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();
   


    const temps = useSelector((state) => state.dogsTempers);

    validate(input);
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        )
    };
    function handleSelect(e){
        if(input.temperament.includes(e.target.value)) alert("The dog already has that temperament!")
        else {
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value],
            });
        }
    }   
    function handleDelete(e){
        setInput({
            ...input,
            temperament: input.temperament.filter((t) => t !== e),
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(raceCreator(input));
        setInput({
            name: '',
            weightMin: '',
            weightMax: '',
            heightMin: '',
            heightMax: '',
            life_spanMin: '',
            life_spanMax: '',
            image: '',
            temperament: []
        });
            }
    useEffect(()=>{
        dispatch(getTemper());
    }, [dispatch]);
    return(
        <div>
            <Link to='/home'><button>Got to Home</button></Link>
<form onSubmit={(e)=> handleSubmit(e)}>
<label>Name:</label>
<input name="name" type="text" placeholder="Enter a name..." onChange={(e)=> handleChange(e)}/>
{errors.name && <span>{errors.name}</span>}
<label>Weight Min:</label>
<input name='weightMin' type='number' min='1' max='100' placeholder="Min" onChange={(e)=> handleChange(e)}/>
<label>Weight Max:</label>
<input name='weightMax' type='number' min='1' max='100' placeholder="Max" onChange={(e)=> handleChange(e)}/>
<label>Height Min:</label>
<input name='heightMin' type='number' min='1' max='100' placeholder="Min" onChange={(e)=> handleChange(e)}/>
<label>Height Max:</label>
<input name='heightMax' type='number' min='1' max='100' placeholder="Max" onChange={(e)=> handleChange(e)}/>
<label>Life Span Min:</label>
<input name='lifeSpanMin' type='number' min='1' max='100' placeholder="Min" onChange={(e)=> handleChange(e)}/>
<label>Life Span Max:</label>
<input name='lifeSpanMax' type='number' min='1' max='100' placeholder="Max" onChange={(e)=> handleChange(e)}/>
<label>Image:</label>
<input name='image' type='text' placeholder="URL" onChange={(e)=> handleChange(e)}/>

<label>Temperament:</label>
<select onChange={(e)=> handleSelect(e)}>
    {temps.map(t=>(
        <option key={t.id} value={t.name}>{t.name}</option>
    )

    )}
    </select>
    <label>Selected:</label>
    { input.temperament.map(e=>(
        <button onClick={()=>handleDelete(e)} key={e}>{e}</button>
    ))}
    <button type='submit'>Create</button>
    </form>
        </div>
    )
}
export default DogCreate