import React, {createContext, useReducer} from 'react';
import { textReducer, textState, commentTriggerState, commentTriggerReducer} from './genericReducer';


// it's for multiple reducers ...
const reduceReducer = (...reducers) =>  (prevState, value, ...args) => {
    reducers.reduce(
         (newState, reducer) => reducer(newState, value, ...args), prevState
        ) 
}


const combinedReducer  = reduceReducer(
    textReducer,
    commentTriggerReducer,
)


const initialState = {
    ...commentTriggerState,
    ...textState,
}


const store  = createContext(initialState);


const { Provider }  = store;

const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(combinedReducer, initialState);
 
    return <Provider value={{ state, dispatch}}> { children } </Provider>
};

export {store, StateProvider}