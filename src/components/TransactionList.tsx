import {useGlobalDispatcher, useGlobalList} from "../context/GlobalState.tsx";
import {Transaction} from "./Transaction.tsx";
import {useEffect, useState} from "react";
import {getAllITransactions} from "../service/transaction-service.tsx";

export function TransactionList() {
    const transactionList=useGlobalList();
    const transactionDispatcher=useGlobalDispatcher();

    useEffect(() => {
        getAllITransactions().then(transactionList=>{
            transactionDispatcher({type:'set-list',transactionList})
        })
            .catch(err => {
                alert("Failed to load items");
            })

    }, []);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    console.log(transactionList);

    return (
        <div className="">
            <button className="w-full p-3 text-xl relative inline-flex items-center justify-center  mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={toggleDropdown}>History</button>
            {isDropdownOpen && (
                <ul id="list" className="list">
                    {transactionList.map(transaction => (
                        <Transaction key={transaction.id} {...transaction} />
                    ))}
                </ul>
            )}
        </div>
    );
}