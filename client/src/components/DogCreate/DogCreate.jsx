import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getTemper, raceCreator } from '../../redux/actions/actionsCreator';
/* import NavBar from '../NavBar/NavBar'; */
import style from './DogCreate.module.css'

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
  if(!input.life_spanMin || !/^[1-9]\d*(\.\d+)?$/.test(input.life_spanMin)){
      errors.life_spanMin = 'Only numbers are allowed';
  }
  if(!input.life_spanMax || !/^[1-9]\d*(\.\d+)?$/.test(input.life_spanMax)){
  errors.life_spanMax = 'Only numbers are allowed';
  }
  if(parseInt(input.life_spanMax) <= parseInt(input.life_spanMin)){
      errors.life_spanMin = 'Min value must to be lower than max valur';
  }
  if (input.image && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.image) ){
      errors.image = 'Only URL or empty are allowed';
  }
  return errors
  }
function DogCreate() {
    const [ input, setInput] = useState({
        name: "",
        weightMin: "",
        weightMax: "",
        heightMin: "",
        heightMax: "",
        life_spanMin: '',
        life_spanMax: '',
        image: '',
        temperament: [],
        author: "",
    })
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();
    const historial = useHistory();
   


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
        else if(input.temperament.length === 5) alert("Up to 4 temperaments")
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
        if (
            input.name !== "" &&
            /^[A-Za-z\s]+$/g.test(input.name) &&
            input.heightMin !== "" &&
            parseInt(input.heightMax) > parseInt(input.heightMin) &&
            input.weightMin !== "" &&
            parseInt(input.weightMax) > parseInt(input.weightMin) &&
            input.life_spanMin !== "" &&
            parseInt(input.life_spanMax) > parseInt(input.life_spanMin) &&
            input.temperament.length !== 0 && 
            (/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.image) || input.image === '')
          ){
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
            author: "",
        });
        historial.push('/home');
            } else {
                alert ("Complete all please...!")
            }
        }
    useEffect(()=>{
        dispatch(getTemper());
    }, [dispatch]);
    return(
        <div>
          <img src={`https://thumbs.dreamstime.com/b/cuatro-perritos-sobre-bandera-22597409.jpg`} alt='back' className={style.back}/>
            <Link to='/home'><button className={style.btnH}>Got to Home</button></Link>
<div className={style.contenedor}>
<div className={style.cont}>
<h1 className={style.title}>Dog creator!</h1>
<form className={style.form} onSubmit={(e)=> handleSubmit(e)}>
    <div className={style.divisor}>
    <div className={style.name}>
<label>Name:</label>
<input name="name" type="text" placeholder="Enter a name..." onChange={(e)=> handleChange(e)}/>
</div>
{errors.name && <span>{errors.name}</span>}
</div>
<div className={style.fst}>
    <div className={style.sec}>
    <div className={style.text}>
<label>Weight Min:</label>
<input name='weightMin' type='number' min='1' max='100' placeholder="Min" onChange={(e)=> handleChange(e)}/>
</div>
<div className={style.text} >
<label>Weight Max:</label>
<input name='weightMax' type='number' min='1' max='100' placeholder="Max" onChange={(e)=> handleChange(e)}/>
</div>
</div>
<div className={style.sec}>
{errors.weightMin && <p>{errors.weightMin}</p>}
{errors.weightMax && <p>{errors.weightMax}</p>}
</div>
</div>
<div className={style.fst}>
    <div className={style.sec}>
    <div className={style.text}> 
<label>Height Min:</label>
<input name='heightMin' type='number' min='1' max='100' placeholder="Min" onChange={(e)=> handleChange(e)}/>
</div>
<div> 
<label>Height Max:</label>
<input name='heightMax' type='number' min='1' max='100' placeholder="Max" onChange={(e)=> handleChange(e)}/>
</div>
</div>
<div className={style.sec}> 
{errors.heightMin && <p>{errors.heightMin}</p>}
{errors.heightMax && <p>{errors.heightMax}</p>}
</div>
</div>
<div className={style.fst}>
<div className={style.sec}>
<div className={style.text}>
<label>Life Span Min:</label>
<input name='life_spanMin' type='number' min='1' max='100' placeholder="Min" onChange={(e)=> handleChange(e)}/>
</div>
<div>
<label>Life Span Max:</label>
<input name='life_spanMax' type='number' min='1' max='100' placeholder="Max" onChange={(e)=> handleChange(e)}/>
</div>
</div>
<div className={style.sec}>
{errors.life_spanMin && <p>{errors.life_spanMin}</p>}
{errors.life_spanMax && <p>{errors.life_spanMax}</p>}
</div>
</div>
<div className={style.divisor}> 
<div className={style.name}> 
<label>Image:</label>
<input name='image' type='text' placeholder="URL" onChange={(e)=> handleChange(e)}/>
</div>
{errors.image && <p>{errors.image}</p>}
</div>
<div className={style.divisor}> 
<div className={style.temps}> 
<label>Temperament:</label>
<select className={style.selTemp} onChange={(e)=> handleSelect(e)}>
    {temps.map((t)=>(
        
        <option key={t.id} value={t.name}>{t.name}</option>
    )

    )}
    </select>
    <div className={style.Selected}>
    <label>Selected:</label>
    { input.temperament.map((e)=>(
        <button  className={style.DelButton} type="button" onClick={()=>handleDelete(e)} key={e}>{e}</button>
    ))}
   
     </div>
        </div>
        </div>
    <div className={style.ContButton}>
    <button className={style.btn} type='submit'>Create</button>
        </div>
    </form>
    </div>
    <div>
        </div>
        </div>
        </div>
    )
}
export default DogCreate