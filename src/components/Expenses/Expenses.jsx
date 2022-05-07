import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState("2022");

    function getYearFilter(yearFilterInput) {
        setFilteredYear(yearFilterInput);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterChange={getYearFilter}
            ></ExpensesFilter>
            {expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                ></ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;
