import { GET_ALL_DOGS, CLEAN_DETAIL, GET_ALL_TEMPER, GET_DOG_NAME, GET_DOG_ID, GET_TEMPER, A_TO_Z, WEIGHT, PAGINATION  } from '../actions/actions';
import { ordering } from './auxx/ordering'
const initialState = {
    numPage: 1,
    dogsLoaded: [],
    dogsTempers: [],
    dogsDetail: {},
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case GET_ALL_DOGS:
            return{
                ...state,
                dogsLoaded: payload,
            };
        case GET_ALL_TEMPER:
            return{
                ...state,
                dogsTempers: payload,
            };
            case GET_DOG_ID:
                return{
                    ...state,
                    dogsDetail: payload,
                };
        case GET_DOG_NAME:
            return{
                ...state,
                dogsDetail: payload,
            };
            case GET_TEMPER:
                return{
                    ...state,
                    dogsTempers: payload,
                };
            case A_TO_Z:
                return{
                    ...state,
                    dogsLoaded: ordering(payload.dogs, payload.sort),
                };
            case WEIGHT:
                return{
                    ...state,
                    dogsLoaded: ordering(payload.dogs, payload.sort),
                };
            case CLEAN_DETAIL:
                return{
                    ...state,
                    dogsDetail: payload,
                };
            case PAGINATION:
                return{
                    ...state,
                    numPage: payload,
                };
            
                    default: 
            return state;
    }
    
} 