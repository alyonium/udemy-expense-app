import React from 'react';
import styles from './ExpensesFilter.module.css';

export const ExpensesFilter = ({ onFilterChange, currentYear }) => {
  const filterChange = (event) => {
    const selectedYear = event.target.value;
    onFilterChange(selectedYear);
  };

  return (
    <div className={styles.expensesFilter}>
      <div className={styles.expensesFilterControl}>
        <label>Filter by year</label>
        <select value={currentYear} onChange={filterChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
