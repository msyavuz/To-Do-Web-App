import "./ExpensesFilter.css";
import { useState } from "react";

function ExpensesFilter(props) {
    const [, setYearFilter] = useState("");

    function yearSelectionHandler(event) {
        setYearFilter(event.target.value);
        props.onFilterChange(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={yearSelectionHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;
