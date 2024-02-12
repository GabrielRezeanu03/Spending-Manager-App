import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Line 5-7: Create the Initial state
const initalState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initalState);

// Line 13-42: Create Global State Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // {children} -> App.js Components
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


// Because this file has more complex logic I managed to create a more clearly and in depth explanation //

// Imports: This file imports necessary modules from React, including createContext and useReducer. It also imports the AppReducer function from another file. 

// Initial State: The initialState object represents the initial state of the application. In this case, it only contains a transactions array.

// Context Creation: The GlobalContext is created using the createContext function provided by React. This context will hold the global state and provide it to the rest of the application.

// Global State Provider: The GlobalProvider component is responsible for providing the global state to the rest of the application. It wraps around the entire application and utilizes the useReducer hook to manage state with the AppReducer function.

// State and Dispatch: Inside the provider component, the useReducer hook is used to create state and a dispatch function. State refers to the current state of the application, and dispatch is a function used to dispatch actions to the reducer.

// Provider Component: The provider component wraps its children with the GlobalContext.Provider component, passing down the state and dispatch function as values. This makes the state and dispatch function accessible to all components within the provider's tree.