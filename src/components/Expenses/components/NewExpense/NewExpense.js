import { useState } from 'react';
import styles from './NewExpense.module.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = ({ onAddExpense }) => {
  const [isAdding, setIsAdding] = useState(false);

  const closeAddBlock = () => {
    setIsAdding(false);
  };

  const openAddBlock = () => {
    setIsAdding(true);
  };

  const saveExpenseData = (newExpense) => {
    onAddExpense(newExpense);
    closeAddBlock();
  };

  return (
    <div className={styles.newExpense}>
      {
        isAdding === false
          ? <button type="button" onClick={openAddBlock}>Add expense</button>
          : <ExpenseForm onSaveExpenseData={saveExpenseData} closeAddBlock={closeAddBlock} />
      }
    </div>
  );
};
