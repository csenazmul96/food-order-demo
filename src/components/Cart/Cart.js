import {useContext} from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";
const Cart = props =>{
    const contaxt = useContext(CartContext)
    const totalAmount = contaxt.totalAmount.toFixed(2)
    const RemoveItem = id =>{
        contaxt.removeCart(id)
    }
    const AddItem = item =>{
        contaxt.addCart(item)
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {contaxt.items.map((item, index)=> {
                return <CartItem key={index} name={item.name} price={item.price} amount={item.amount} onRemove={RemoveItem.bind(null, item.id)} onAdd={AddItem.bind(null, item)} />
            })}
        </ul>
    );
    return (
        <Modal closeModal={props.closeClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closeClick}>Close</button>
                {contaxt.items.length ? <button className={classes.button}>Order</button> : null}
            </div>
        </Modal>
    )
}
export default Cart
