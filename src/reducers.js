import {combineReducers} from 'redux'

export const todos = (state = [1,2,3,4],action) =>{
    switch(action.type){
        case 'CREATE_TODO':
            return [...state,action.payload];
        default:
            return state;
    }
};



export const reducer = combineReducers(todos);
