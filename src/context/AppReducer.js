// This file exports an anonymous function serving as the reducer function for managing state changes

// The reducer function takes two arguments: state and action
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      // Logic for deleting transaction from state
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      // Logic for adding transaction to state
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

// This file directly exports an anonymous function that serves as the reducer function. This function takes two arguments: state and action, and it contains the logic to update the state based on the dispatched action.

// Reducer Function: The AppReducer function is the core of state management in this application. It takes two arguments: state and action. The state represents the current state of the application, and the action represents the type of action being dispatched.

// Switch Statement: Inside the reducer function, there's a switch statement that evaluates the type of action being dispatched. Depending on the action type, different logic is executed to update the state accordingly.

// Action Types: The action types used here (ADD_TRANSACTION and DELETE_TRANSACTION) are imported from the "actions" file. These constants help maintain consistency and avoid typos when dispatching actions.

// State Updates: Within each case of the switch statement, the reducer returns a new state object with updated values. This ensures immutability of the state, meaning the original state is not modified directly

