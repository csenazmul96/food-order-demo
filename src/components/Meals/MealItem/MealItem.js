import {useContext} from "react";
import React from "react";
import classes from './MealItem.module.css'
import MealForm from "./MealForm";
import CartContext from "../../../store/cartContext";
const MealItem = (props)=>{
    const context = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`
    const addCartItem = qty =>{
        context.addCart({
            id: props.id,
            name: props.name,
            amount: qty,
            price: props.price
        })
    }
return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealForm addCartItem={addCartItem} />
        </div>
    </li>
)

}
export default MealItem
