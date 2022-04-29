import styles from './Expenses.module.css';
import { ExpenseItem } from './components/ExpenseItem';
import { Card } from '../Card/Card';

const expenses = [
  {
    id: 1,
    date: new Date(2021, 1, 5),
    title: 'Book',
    price: 100,
  },
  {
    id: 2,
    date: new Date(2022, 12, 14),
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

export const Expenses = () => {
  return (
    <Card className={styles.expenses}>
      {expenses.map((item) => (
        <ExpenseItem date={item.date} title={item.title} price={item.price} key={item.id} />
      ))}
    </Card>
  );
};
