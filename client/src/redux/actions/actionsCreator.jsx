import axios from 'axios';
import { FILTER_DB, FILTER_T, GET_ALL_DOGS, CLEAN_DETAIL, PAGINATION, GET_DOG_ID, GET_DOG_NAME, /* CREATE_DOG */ GET_TEMPER, A_TO_Z, WEIGHT} from './actions';

export  function getAllDogs(){
    return function(dispatch){
        return  axios(`/dog`)
        .then(res => {
            dispatch({type: GET_ALL_DOGS, payload: res.data})
        })
        .catch((error) => console.error(error))
    };
};
export function getDogByName(name){
    return function(dispatch){
        return axios(`/dog?name=${name}`)
        .then(res => {
            dispatch({type: GET_DOG_NAME, payload: res.data})
        })
        .catch((error) => console.error(error))
    }
}
export function getDogID(id){
    return function(dispatch){
        return axios(`/dog/${id}`)
        .then(resp => {
            dispatch({type: GET_DOG_ID, payload: resp.data})
        })
        .catch(error => console.error(error))
    }
}
export function cleanDetail(){
    return function(dispatch){
        return axios(`/dog/`)
        .then(() => {
            dispatch({type: CLEAN_DETAIL})
        })
        .catch(error => console.error(error))
    }
}
export function getTemper(){
    return async function(dispatch){
        var temper = await axios(`/temper`)
        return dispatch({ type: GET_TEMPER, payload: temper.data});
        }
        
    }

export function raceCreator(payload){
    return async function(dispatch){
        const newDog = await axios.post(`/dog`, payload)
        return newDog
    };
};
export function orderByName(payload){
    return{type: A_TO_Z, payload };
};
export function orderByWeight(payload){
    return {type: WEIGHT, payload}
}
export function setPagination(payload){
    return function(dispatch){
        dispatch({type: PAGINATION, payload})
    }
}
export function filterDB(payload){
    return{type: FILTER_DB, payload}
}
export function filterT(payload){
    return{type: FILTER_T, payload}
}