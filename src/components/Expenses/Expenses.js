import { useState } from 'react';
import styles from './Expenses.module.css';
import { ExpenseItem } from './components/ExpenseItem/ExpenseItem';
import { Card } from '../Card/Card';
import { ExpensesFilter } from './components/ExpensesFilter/ExpensesFilter';

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
        {
          filteredExpenses.length === 0
            ? (<p>Expenses not found ;(</p>)
            : (
              filteredExpenses.map((item) => (
                <ExpenseItem date={item.date} title={item.title} price={item.price} key={item.id} />
              )))
        }
      </Card>
    </div>

  );
};
