import './App.css'
import {Header} from "./components/Header.tsx";
import {Balance} from "./components/Balance.tsx";
import {IncomeExpenses} from "./components/IncomeExpenses.tsx";
import {TransactionList} from "./components/TransactionList.tsx";
import {Form} from "./components/Form.tsx";
import {GlobalProvider} from "./context/GlobalState.tsx";

function App() {


    return (
        <>
            <GlobalProvider>
                <Header/>
                <div className="flex">
                    <div>
                        <Balance/>
                        <IncomeExpenses/>
                        <Form/>
                    </div>
                    <div className="pl-5 ml-10">
                        <TransactionList/>
                    </div>
                </div>
            </GlobalProvider>
        </>
    )
}

export default App
