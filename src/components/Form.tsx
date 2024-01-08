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
                console.log(err);
                alert("Failed to save the task, try again!");
            });
    }

    return (
        <>
            <h3 className="text-teal-600 text-2xl font-bold">Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text" className="text-teal-600 font-semibold">Description</label>
                    <input ref={txtRef} type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount" className="text-teal-600 font-semibold"
                    >Amount <br/>
                        <span className="text-gray-600 text-sm">(Negative - Expenses, Positive - Incomes)</span></label
                    >
                    <input
                           value={amount === 0 ? '' : amount}
                           onChange={(e) => setAmount(Number(e.target.value))} type="number" placeholder="Enter amount..."/>
                </div>
                <button className="w-full text-xl mt-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Add transaction</button>
            </form>
        </>
    );
}