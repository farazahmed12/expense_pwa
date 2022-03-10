import React, { useContext } from "react";

import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalContext";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, i) => (
          <Transaction key={i} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
