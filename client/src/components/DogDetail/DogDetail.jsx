import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getDogID } from '../../redux/actions/actionsCreator';
import NavBar from '../NavBar/NavBar';

export default function DogDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const data = useSelector(state => state.dogsDetail);
    console.log("DATA", data);

    useEffect(()=>{
        dispatch(getDogID(id));             
    }, [dispatch, id]);
    console.log("ID ", id)
    
    
    if(!data) {
        return (
            <>
            <NavBar/>
        <img src='https://previews.123rf.com/images/lightwise/lightwise1508/lightwise150800076/44185374-p%C3%A1gina-de-error-404-no-encontrado-concepto-y-un-s%C3%ADmbolo-de-enlace-roto-o-muerto-como-un-perro-que-em.jpg' alt='not found'/> )
        </>
    )} else if (!data.weightMin){ 
        
    return (
        <>
        <NavBar/> 
        <h3>Name: {data.name && data.name }</h3>
    <p>Weight: {data.weight && data.weight.metric} kgs.</p>
    <p>Height: {data.height && data.height.metric} cms.</p>
    <p>Temperament: {data.temperament && data.temperament} </p>
    <p>Life Span: {data.life_span && data.life_span} </p>
    <img src={data.reference_image_id? `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg` : data.name} alt="perro" style={{height: 300}}/>
    
        
    </>
    )
    
    
} else {
    return (
        <>
        <NavBar/>
        <h3>Name: {data.name && data.name }</h3>
    <p>Weight: min {data.weightMin} - max {data.weightMax} kgs.</p>
    <p>Height: min {data.heightMin} - max {data.heightMax} cms.</p>
    <p>Temperament: {data.tempers.map((t) => (`${t.name} `) )}</p>
    <p>Life Span: min {data.life_spanMin} - max {data.life_spanMax}</p>
    <img src={data.image} alt="perro" style={{height: 300}}/>
    
       
    </>
    )
}
}