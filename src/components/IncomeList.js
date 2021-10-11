import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState' 
import IncomeTransaction from './IncomeTransaction';
function IncomeList() {
    const {incomeTransaction}=useContext(GlobalContext);
    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
               {incomeTransaction.map(incomeTransactions=>(
                  <IncomeTransaction incomeTransaction={incomeTransactions}/>
               ))}
            </ul>
        </div>
    )
}

export default IncomeList
