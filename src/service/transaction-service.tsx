import {TransactionDTO} from "../transaction-DTO/TransactionDTO.ts";


const API_BASE_URL='http://localhost:8080/api/v1/transactions';

export async function getAllITransactions(){
    return await (await fetch(`${API_BASE_URL}`)).json();
}

export async function saveTransaction(transaction:TransactionDTO){
    return await  (await fetch(API_BASE_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(transaction)
    })).json() as TransactionDTO;
}


export async function deleteTransaction(transactionId: number) {
    const response = await fetch(`${API_BASE_URL}/${transactionId}`, {method: 'DELETE'});
    if (!response.ok) throw new Error("Failed to delete the task");
}