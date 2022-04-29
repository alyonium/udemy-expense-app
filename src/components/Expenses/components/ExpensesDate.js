import styles from './ExpensesDate.module.css'

export const ExpenseDate = ({date}) => {
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const day = date.getDate();

    return(
        <div className={styles.expenseDate}>
            <div className={styles.expenseDateDay}>{day}</div>
            <div className={styles.expenseDateMonth}>{month}</div>
            <div className={styles.expenseDateYear}>{year}</div>
        </div>
    );
}