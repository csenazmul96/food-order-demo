import {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cartContext";
const HeaderCartButton = props => {
    const [btnInit, setButtonInit]=useState(false)
    const cartItems = useContext(CartContext)
    const {items} = cartItems
    const itemNumber = items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount
    },0)


    const btnClasses = `${classes.button} ${btnInit ? classes.bump : ''}`
    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setButtonInit(true)
        const timer = setTimeout(()=>{
            setButtonInit(false)
        }, 300)
        return () =>{
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{itemNumber}</span>
        </button>
    )
}
export default HeaderCartButton
