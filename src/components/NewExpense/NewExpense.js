import styles from './NewExpense.module.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = ({ onAddExpense }) => {
  const saveExpenseData = (newExpense) => {
    onAddExpense(newExpense);
  };

  return (
    <div className={styles.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};
