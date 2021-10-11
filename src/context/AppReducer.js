export default (state,action)=>{
    switch(action.type){
        case 'ADD_INCOME':
            return {
                ...state,
                incomeTransaction:[action.payload,...state.incomeTransaction],
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseTransaction:[action.payload,...state.expenseTransaction]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                incomeTransaction:state.incomeTransaction.filter((incomeTransaction)=>
                incomeTransaction.id!==action.payload
                ),
               expenseTransaction:state.expenseTransaction.filter((expenseTransaction)=>
               expenseTransaction.id!==action.payload)
            }
        default:
            return state;
    }
}