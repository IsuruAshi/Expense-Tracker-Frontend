import {useGlobalList} from "../context/GlobalState.tsx";

export function Balance() {
    const transactions=useGlobalList();
    const amounts = transactions.map(transaction => +transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="pr-80">
            <h4 className="text-center font-bold"  >Your Balance</h4>
            <h1 className="text-center text-2xl text-amber-700">Rs.{total}</h1>
        </div>
    );
}