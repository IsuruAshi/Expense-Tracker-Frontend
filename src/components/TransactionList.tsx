import {useGlobalDispatcher, useGlobalList} from "../context/GlobalState.tsx";

export function TransactionList() {
    const transactionList=useGlobalList();
    const transactionDispatcher=useGlobalDispatcher();

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactionList.map(transaction=> (
                    <li key={transaction.id} className="minus">
                        {transaction.text} <span>{transaction.amount}</span>
                        <button className="delete-btn">x</button>
                    </li>
                ))}
            </ul>
        </>
    );
}