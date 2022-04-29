import styles from './ExpenseItem.module.css';
import {ExpenseDate} from "./ExpensesDate";
import {Card} from "../../Card/Card";
export const ExpenseItem = ({date, title, price}) => {
    return (
    <Card className={styles.expenseItem}>
        <ExpenseDate date={date}/>
        <div className={styles.expenseItemDescription}>
            <h2>{title}</h2>
        </div>
        <div className={styles.expenseItemPrice}>${price}</div>
    </Card>
    )
}
