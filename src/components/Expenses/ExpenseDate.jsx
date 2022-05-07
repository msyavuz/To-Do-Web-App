import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.expenseDate.toLocaleDateString("tr-TR", {
        month: "long",
    });
    const year = props.expenseDate.toLocaleDateString("tr-TR", {
        year: "numeric",
    });
    const day = props.expenseDate.toLocaleDateString("tr-TR", {
        day: "2-digit",
    });

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;
