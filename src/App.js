import './App.css';
import {Expenses} from "./components/Expenses/Expenses";
import {NewExpense} from "./components/NewExpense/NewExpense";
export const App = () => {
    return (
        <div className="app">
            <Expenses/>
            <NewExpense/>
        </div>
    )
}

