import React, {useRef, useState} from "react";
import {useGlobalDispatcher} from "../context/GlobalState.tsx";
import {saveTransaction} from "../service/transaction-service.tsx";
import {TransactionDTO} from "../transaction-DTO/TransactionDTO.ts";

export function Form() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const txtRef = useRef<HTMLInputElement>(null);
    const transactionDispatcher=useGlobalDispatcher();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!text.trim()||!amount) return;
        saveTransaction(new TransactionDTO(null, text, amount))
            .then(transaction => {
                transactionDispatcher({type: 'add', transaction});
                setText("");
                setAmount(0);
                txtRef.current!.focus();
            })
            .catch(err => {
                alert("Failed to save the task, try again!");
            });
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)</label
                    >
                    <input
                           value={amount === 0 ? '' : amount}
                           onChange={(e) => setAmount(Number(e.target.value))} type="number" placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}