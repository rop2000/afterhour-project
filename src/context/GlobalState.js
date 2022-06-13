import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  offerList: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state

  function addOfferToList(item) {
    dispatch({
      type: "ADD_OFFER",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        offerList: state.offerList,
        addOfferToList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
