import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Linia 5-10: Calculate the total balance
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Line 12-18: Render component for balance
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;


// This component calculates and displays the total balance. // 