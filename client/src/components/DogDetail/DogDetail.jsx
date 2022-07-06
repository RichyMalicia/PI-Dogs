import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { cleanDetail, getDogID } from '../../redux/actions/actionsCreator';
import NavBar from '../NavBar/NavBar';

export default function DogDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const data = useSelector(state => state.dogsDetail);

    useEffect(()=>{
        dispatch(getDogID(id));
        return ()=>{
            dispatch(cleanDetail())
        };
             
    }, [dispatch, id]);
    console.log("ID ", id)
    
    
    if(!data) {
        return (
            <>
            <NavBar/>
        <img src='https://previews.123rf.com/images/lightwise/lightwise1508/lightwise150800076/44185374-p%C3%A1gina-de-error-404-no-encontrado-concepto-y-un-s%C3%ADmbolo-de-enlace-roto-o-muerto-como-un-perro-que-em.jpg' alt='not found'/> )
        </>
    )} else { 
        
    return (
        <>
        <NavBar/>
        <h3>Name: {data.name && data.name }</h3>
    <p>Weight: {data.weight && data.weight.metric} kgs.</p>
    <p>Height: {data.height && data.height.metric}  cms.</p>
    <p>Temperament: {data.temperament && data.temperament}</p>
    <p>Life Span: {data.life_span && data.life_span}</p>
    <img src={data.reference_image_id? `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg` : data.image} alt="perro" style={{height: 300}}/>
    
    </>
    )
    
    
}
}