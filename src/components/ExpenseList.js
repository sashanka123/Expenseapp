import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import ExpenseTransaction from './ExpenseTransaction';
function ExpenseList() {
    const {expenseTransaction}=useContext(GlobalContext);
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {expenseTransaction.map((expenseTransactions)=>{
                return (
                   <ExpenseTransaction expenseTransaction={expenseTransactions}/>
                )})}
            </ul>
        </div>
    )
}
export default ExpenseList;
