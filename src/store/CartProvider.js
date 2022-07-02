import {useReducer} from "react";
import CartContext from "./cartContext";

const defaultState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) =>{
    if(action.type === 'ADD_CART'){
        const updatedItem = state.items.concat(action.item)
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItem,
            totalAmount: newTotalAmount
        }
    }
    return defaultState;
}
const CartProvider = props =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)
    const addCartItem = item => {
        dispatchCartAction({type:'ADD_CART', item: item})
    }
    const removeCartItem = id => {
        dispatchCartAction({type:'REMOVE_CART', id: id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addCart: addCartItem,
        removeCart: removeCartItem
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
