import {useRef, useState} from "react";
import classes from './MealForm.module.css'
import Input from "../../UI/Input";

const MealForm = (props) =>{
    const [error, setError] =useState(false)
    const amountRef = useRef()
    const submitForm = (event) =>{
        event.preventDefault()

        const enterAmount = amountRef.current.value;
        const enterAmountNumber = +enterAmount
        if(enterAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5){
            setError(true)
            return;
        }
        props.addCartItem(enterAmountNumber)

    }
    return (
        <form className={classes.form} onSubmit={submitForm}>
        <Input label="Qty" ref={amountRef} input={{id:'qty', type:'number', defaultValue: '1', min: '1', max: '5', step: '1', }} />
        <button>+ Add</button>
            {error && <p>Please enter a vlid amount (1-5)</p>}
        </form>
    )
}
export default MealForm
