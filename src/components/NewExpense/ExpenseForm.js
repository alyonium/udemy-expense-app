import { useState } from 'react';
import styles from './ExpenseForm.module.css';

export const ExpenseForm = () => {
  const [form, setForm] = useState({
    title: undefined,
    price: undefined,
    date: undefined,
  });

  const updateTitle = (event) => {
    setForm((currentState) => ({
      ...currentState,
      title: event.target.value,
    }));
  };

  const updatePrice = (event) => {
    setForm((currentState) => ({
      ...currentState,
      price: event.target.value,
    }));
  };

  const updateDate = (event) => {
    setForm((currentState) => ({
      ...currentState,
      date: event.target.value,
    }));
  };

  const saveExpense = (event) => {
    event.preventDefault();

    // const expenseData = {
    //   title: form.title,
    //   price: form.price,
    //   date: new Date(form.date),
    // };
  };

  return (
    <form action="">
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            onChange={updateTitle}
          />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Price</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={form.price}
            onChange={updatePrice}
          />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Date</label>
          <input
            type="date"
            min="2001-01-01"
            max="2099-12-31"
            onChange={updateDate}
            value={form.date}
          />
        </div>
      </div>
      <div className={styles.newExpenseActions}>
        <button type="submit" onSubmit={saveExpense}>Add expense</button>
      </div>
    </form>
  );
};
