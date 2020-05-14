import React from 'react';
import { Header } from './components/Header';
import { Container } from './components/Container';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  return (
    <GlobalProvider>

      <Header
        title="Expense Tracker"
      />

      <Container>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction />
      </Container>

    </GlobalProvider>
  );
}

export default App;
