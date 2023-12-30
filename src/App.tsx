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
                <div className="container">
                    <Balance/>
                    <IncomeExpenses/>
                    <TransactionList/>
                    <Form/>
                </div>
            </GlobalProvider>
        </>
    )
}

export default App
