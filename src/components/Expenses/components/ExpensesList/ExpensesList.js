import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import styles from './ExpensesList.module.css';

export const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (<p className={styles.expensesListFallback}>Expenses not found ;(</p>);
  }

  return (
    <ul className={styles.expensesList}>
      {
        expenses.map((item) => (
          <ExpenseItem
            date={item.date}
            title={item.title}
            price={item.price}
            key={item.id}
          />
        ))
      }
    </ul>
  );
};
