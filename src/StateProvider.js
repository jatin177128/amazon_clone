import React, {createContext, useContext, useReducer} from "react";
//this is data layer
export const StateContext = createContext();

export const StateProvider =({reducer,initialstate,children})=>(
     <StateContext.Provider value={useReducer(reducer,initialstate)}>
        {children}
     </StateContext.Provider>
)
export const useStateValue = ()=>useContext(StateContext); 