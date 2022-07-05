import axios from 'axios';
import { GET_ALL_DOGS, CLEAN_DETAIL, PAGINATION, GET_ALL_TEMPER, GET_DOG_ID, GET_DOG_NAME, CREATE_DOG, GET_TEMPER, A_TO_Z, WEIGHT} from './actions';

export  function getAllDogs(){
    return function(dispatch){
        return  axios(`http://localhost:3001/dog`)
        .then(res => {
            dispatch({type: GET_ALL_DOGS, payload: res.data})
        })
        .catch((error) => console.error(error))
    };
};
export function getDogByName(name){
    return function(dispatch){
        return axios(`http://localhost:3001/dog?name=${name}`)
        .then(res => {
            dispatch({type: GET_DOG_NAME, payload: res.data})
        })
        .catch((error) => console.error(error))
    }
}
export function getDogID(id){
    return function(dispatch){
        return axios(`http://localhost:3001/dog/${id}`)
        .then(resp => {
            dispatch({type: GET_DOG_ID, payload: resp.data})
        })
        .catch(error => console.error(error))
    }
}
export function cleanDetail(){
    return function(dispatch){
        return axios(`http://localhost:3001/dog/`)
        .then(() => {
            dispatch({type: CLEAN_DETAIL})
        })
        .catch(error => console.error(error))
    }
}
export function getTemper(){
    return function(dispatch){
        return axios(`http://localhost:3001/temper`)
        .then(resp =>{
            dispatch({ type: GET_TEMPER, payload: resp.data});
        })
        .catch((e)=>console.log(e))
    }
}
export function getAllTemper(){
    return function(dispatch){
        return axios(`http://localhost:3001/temper/all`)
        .then(resp =>{
            dispatch({ type: GET_ALL_TEMPER, payload: resp});
        })
        .catch((e)=>console.log(e))
    }
}
export function raceCreator(data){
    return function(dispatch){
        return axios.post(`http://localhost:3001/dog`, data)
        .then(resp =>{
            dispatch({type: CREATE_DOG, payload: resp.data });
        })
        .catch((e)=> console.log(e))
    };
};
export function orderByName(payload){
    return{ type: A_TO_Z, payload };
};
export function orderByWeight(payload){
    return {type: WEIGHT, payload}
}
export function setPagination(payload){
    return function(dispatch){
        dispatch({type: PAGINATION, payload})
    }
}
