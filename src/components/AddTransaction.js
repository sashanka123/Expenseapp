import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import React,{useState,useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {GlobalContext} from '../context/GlobalState';

function AddTransaction() {
    const {addIncome}=useContext(GlobalContext);
    const {addExpense}=useContext(GlobalContext);
    const [income,setIncome]=useState({incomeText:'',incomeAmount:0});
    const [expense,setExpense]=useState({expenseText:'',expenseAmount:0});
    const onchangeIncome=(e)=>{
        setIncome({...income,[e.target.name]:e.target.value});
        console.log(income);
    }
    const onchangeExpense=(e)=>{
        setExpense({...expense,[e.target.name]:e.target.value});
        console.log(expense);
    }
    const {incomeText,incomeAmount}=income;
    const {expenseText,expenseAmount}=expense;
    const onSubmitIncome=(e)=>{
        e.preventDefault();
        const newIncomeTransaction={
            id:uuidv4(),
            incomeText,
            incomeAmount:incomeAmount*1,
        }
       addIncome(newIncomeTransaction);
    }
    const onSubmitExpense=(e)=>{
        e.preventDefault();
        const newExpenseTransaction={
            id:uuidv4,
            expenseText,
            expenseAmount:expenseAmount*1,
        }
        addExpense(newExpenseTransaction);
    }
    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text" name="incomeText" placeholder="Add Income" onChange={onchangeIncome}></input>
                    <input type="number" name="incomeAmount" placeholder="Amount" onChange={onchangeIncome}></input>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input type="text" name="expenseText" placeholder="Add Expense" onChange={onchangeExpense}></input>
                    <input type="number" name="expenseAmount" placeholder="Amount" onChange={onchangeExpense}></input>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
