import React, {createContext, ReactNode, useContext, useReducer} from "react";

import {TransactionDTO} from "../transaction-DTO/TransactionDTO.ts";


type Action = {
    type: "add" | "delete" | "set-list",
    [property: string]: any
}

const GlobalContext = createContext<TransactionDTO[]>([])
;
const GlobalDispatcherContext = createContext<React.Dispatch<Action>>(() => {
});

function GlobalReducer(transactionList: TransactionDTO[], action: Action) {
    if (action.type === "add") {
        return [...transactionList, action.transaction];
    }
    if (action.type === "delete") {
        return transactionList.filter(transaction => transaction.id !== action.id);
    } else if (action.type === "set-list") {
        return action.transactionList;
    } else {
        return transactionList;
    }
}

export function GlobalProvider({children}: { children: ReactNode }) {

    const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];

    const [transactionList, transactionDispatcher] = useReducer(GlobalReducer, dummyTransactions);
    return (
        <GlobalContext.Provider value={transactionList}>
            <GlobalDispatcherContext.Provider value={transactionDispatcher}>
                {children}
            </GlobalDispatcherContext.Provider>
        </GlobalContext.Provider>

    )
}

export function useGlobalList() {
    return useContext(GlobalContext);
}

export function useGlobalDispatcher() {
    return useContext(GlobalDispatcherContext);
}
