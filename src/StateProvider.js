import React, { useContext, useReducer, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// This is how we use it in a component
export const useStateValue = () => useContext(StateContext);
