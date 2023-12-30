import {useGlobalDispatcher, useGlobalList} from "../context/GlobalState.tsx";
import {Transaction} from "./Transaction.tsx";

export function TransactionList() {
    const transactionList=useGlobalList();
    const transactionDispatcher=useGlobalDispatcher();

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactionList.map(transaction=> (
                    <Transaction key={transaction.id}{...transaction}/>
                ))}
            </ul>
        </>
    );
}