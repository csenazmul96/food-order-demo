import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cartContext";
const HeaderCartButton = props => {
    const cartItems = useContext(CartContext)
    const itemNumber = cartItems.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount
    },0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{itemNumber}</span>
        </button>
    )
}
export default HeaderCartButton
