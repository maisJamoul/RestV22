import { createContext, useReducer } from "react";
import storeReducer,{initialState} from './reducer.js';

export const RestContext =createContext();

export const RestProvider=({children})=>{
    
    const [state,dispatch]=useReducer(storeReducer,initialState)
    //  //////////////////
    const addToReserv=(meal)=>{
        const updatedReserv=state.meals;
        updatedReserv.push(meal);
        updatePrice(updatedReserv);

        dispatch({
            type:"add",
            payload:updatedReserv
        });
    }
    // //////////////////
    const removeFromReserv=(meal)=>{
        const updatedReserv=state.meals.filter((currentmeal)=>currentmeal.id!==meal.id);
        updatePrice(updatedReserv);

        dispatch({
            type:"remove",
            payload:updatedReserv
        });
    }
    // ///////////////////
    const updatePrice=(meals)=>{
        let total=0;
        meals.forEach((meal)=>total+=meal.price);
        console.log(state.total);
        state.total=total;
        dispatch({
            type:"update price",
            payload:state.total
        });
    }
    // //////////////////
    
        const value={ 
            total:state.total,
            meals:state.meals,
            addToReserv,
            removeFromReserv
        }

    return <RestContext.Provider value={value}>
        {children}
    </RestContext.Provider>
}
