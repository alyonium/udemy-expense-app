import './App.css';
import {ExpenseItem} from "./components/ExpenseItem";
const expenses = [{
    id: 1,
    date: new Date(2021, 1, 5),
    title: 'Book',
    price:  100,
},
{
    id: 2,
    date: new Date(2022, 2, 14),
    title: 'Pizza',
    price:  550,
},
{
    id: 3,
    date: new Date(2021, 8, 20),
    title: 'Flower',
    price:  1000,
}];


export const App = () => {
    return (
        <div className="App">
            {expenses.map((item) => (<ExpenseItem date={item.date.toISOString()} title={item.title} price={item.price}/>))}
        </div>
    )
}

