import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransactions from "./components/AddTransactions";
import "./App.css";

// import GlobalProvider
import { GlobalProvider } from "./Context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
};

export default App;
