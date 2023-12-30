import {useGlobalList} from "../context/GlobalState.tsx";

export function Balance() {
    const transactions=useGlobalList();
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 className="balance">${total}</h1>
        </>
    );
}