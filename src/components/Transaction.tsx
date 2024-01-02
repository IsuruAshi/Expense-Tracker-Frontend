import {TransactionDTO} from "../transaction-DTO/TransactionDTO.ts";
import {useId, useState} from "react";
import {useGlobalDispatcher} from "../context/GlobalState.tsx";
import {deleteTransaction} from "../service/transaction-service.tsx";

export function Transaction(transaction:TransactionDTO) {
    const sign =transaction.amount<0?'-':'+';
    const transactionDispatcher=useGlobalDispatcher();
    const id=useId();
    const [remove, setRemove] = useState(false);
    function handleDelete(){
        deleteTransaction(transaction.id!).then(value => {
            setRemove(true);
            setTimeout(() => {
                transactionDispatcher({
                    type: 'delete',
                    id: transaction.id
                });
            }, 500);
        }).catch(err=>{
            alert("Failed to delete the item, try again!");
        });
    }
    return (
        <>
            <li key={transaction.id} className={transaction.amount<0?'minus':'plus'}>
                {transaction.text} <span>{sign} Rs.{Math.abs(transaction.amount)}</span>
                <button onClick={handleDelete} className="delete-btn bg-rose-500 rounded">x</button>
            </li>
        </>
    );
}