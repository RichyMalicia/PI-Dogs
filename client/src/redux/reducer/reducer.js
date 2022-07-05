import { GET_ALL_DOGS, CLEAN_DETAIL, GET_ALL_TEMPER, GET_DOG_NAME, GET_DOG_ID, GET_TEMPER, A_TO_Z, WEIGHT, PAGINATION  } from '../actions/actions';

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
                dogsLoaded: payload,
            };
            case GET_TEMPER:
                return{
                    ...state,
                    dogsTempers: payload,
                };
            case A_TO_Z:
                const filterName = payload === 'A - Z' ?
                state.dogsLoaded.sort((dog1, dog2) => dog1.name.localeCompare(dog2.name)):
                state.dogsLoaded.sort((dog1, dog2) => dog2.name.localeCompare(dog1.name));
                return{
                    ...state,
                    dogsLoaded: filterName
                };
            case WEIGHT:
                const filterWeight = payload === "Higher" ?
                state.dogsLoaded.sort((dog1, dog2) => {
                    if(dog1.name === "Olde English Bulldogge") dog1.weightMin = 27;
                    else if(dog2.name === "Olde English Bulldogge") dog2.weightMin = 27;
                    return (parseInt(dog2.weightMin)) - (parseInt(dog1.weightMin))
                }) :
                state.dogsLoaded.sort((dog1, dog2) =>{
                    if(dog1.name === "Olde English Bulldogge") dog1.weightMin =27;
                    else if(dog2.name === "Olde English Bulldogge") dog2.weightMin = 27;
                    return (parseInt(dog1.weightMin)) - (parseInt(dog2.weightMin))
                });
                    return{
                    ...state,
                    dogsLoaded: filterWeight,
                };
            case CLEAN_DETAIL:
                return{
                    ...state,
                    dogsDetail: [],
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