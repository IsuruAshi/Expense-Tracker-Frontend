
import './App.css'
import {Header} from "./components/Header.tsx";
import {Balance} from "./components/Balance.tsx";
import {IncomeExpenses} from "./components/IncomeExpenses.tsx";
import {TransactionList} from "./components/TransactionList.tsx";
import {Form} from "./components/Form.tsx";

function App() {


  return (
    <>
      <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <Form/>
        </div>
    </>
  )
}

export default App
