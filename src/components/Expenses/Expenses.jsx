import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState("2022");

    function getYearFilter(yearFilterInput) {
        setFilteredYear(yearFilterInput);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterChange={getYearFilter}
            ></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList expenses={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;
