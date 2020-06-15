import React, { useState} from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <GlobalProvider>
      <Header showForm ={() => setShowForm(true)} />
      <div className="container">
        {showForm ?
          <AddTransaction
            closeForm={() => setShowForm(false)}
          /> : null
        }
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        
        
      </div>
    </GlobalProvider>
  );
}

export default App;
