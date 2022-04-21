import styles from './ExpenseItem.module.css';

export const ExpenseItem = (props) => {
    return (
    <div className={styles.expenseItem}>
        <div>{props.date}</div>
        <div className={styles.expenseItemDescription}>
            <h2>{props.title}</h2>
        </div>
        <div className={styles.expenseItemPrice}>{props.price}</div>
    </div>
    )
}
