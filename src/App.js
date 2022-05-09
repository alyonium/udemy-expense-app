import './App.css';
import { useState } from 'react';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/Expenses/components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 1,
    date: new Date(2021, 1, 5),
    title: 'Book',
    price: 100,
  },
  {
    id: 2,
    date: new Date(2022, 11, 14),
    title: 'Pizza',
    price: 550,
  },
  {
    id: 3,
    date: new Date(2020, 8, 20),
    title: 'Flower',
    price: 1000,
  },
];

export const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app">
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};
