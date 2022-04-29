import styles from './NewExpense.module.css';
import {ExpenseForm} from "./ExpenseForm";

export const NewExpense = () => {
    return(
        <div className={styles.newExpense}>
            <ExpenseForm/>
        </div>
    );
}