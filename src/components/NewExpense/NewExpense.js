import React , {useState}from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [isEditing, setIsEditing]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
       
    }
    const satartEditHandler= () =>{
        setIsEditing(true);
    }
    const onCancleEditHandler = () =>{
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing&&<button onClick={satartEditHandler}>Add New Expene </button>}
            {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCincle={onCancleEditHandler}/>}
    
        </div>
    )
}

export default NewExpense
