import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // // Line 8: Determine if transaction is income or expense
  const sign = transaction.amount < 0 ? "-" : "+";

  // Line 11-25: Render transaction component with conditional styling
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;

//This component represents a single transaction and applies conditional styling based on whether the transaction amount is positive (income) or negative (expense).//