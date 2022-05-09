import { useState } from 'react';
import styles from './Expenses.module.css';
import { Card } from '../Card/Card';
import { ExpensesFilter } from './components/ExpensesFilter/ExpensesFilter';
import { ExpensesList } from './components/ExpensesList/ExpensesList';
import { ExpensesChart } from './components/ExpensesChart/ExpensesChart';

export const Expenses = ({ expenses }) => {
  const [currentYear, setCurrentYear] = useState('2022');

  const filterChange = (selectedYear) => {
    setCurrentYear(selectedYear);
  };

  const filteredExpenses = expenses
    .filter((item) => {
      return item.date.getFullYear().toString() === currentYear;
    });

  return (
    <div>
      <Card className={styles.expenses}>
        <ExpensesFilter onFilterChange={filterChange} currentYear={currentYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>

  );
};
