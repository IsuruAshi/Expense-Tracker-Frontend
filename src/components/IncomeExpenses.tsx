import {useGlobalList} from "../context/GlobalState.tsx";

export function IncomeExpenses() {
    const transactions=useGlobalList();
    const amounts = transactions.map(transaction => +transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4 className="">Income</h4>
                <p className="money plus ">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>

    );
}