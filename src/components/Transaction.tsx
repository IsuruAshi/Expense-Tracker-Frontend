import {TransactionDTO} from "../transaction-DTO/TransactionDTO.ts";

export function Transaction(transaction:TransactionDTO) {
    const sign =transaction.amount<0?'-':'+';
    return (
        <>
            <li key={transaction.id} className={transaction.amount<0?'minus':'plus'}>
                {transaction.text} <span>{sign} Rs.{Math.abs(transaction.amount)}</span>
                <button className="delete-btn">x</button>
            </li>
        </>
    );
}