import {useReducer} from "react";
import CartContext from "./cartContext";

const defaultState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) =>{
    if(action.type === 'ADD_CART'){
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const checkExists = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[checkExists]
        let updatedItems= []
        if(existingItem){
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[checkExists] = updatedItem
        }else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: newTotalAmount > 0 ? newTotalAmount : 0
        }
    }
    if(action.type === 'REMOVE_CART'){
        const index = state.items.findIndex(item => parseInt(item.id) === parseInt(action.id))

        const checkItem = state.items[index]
        const newTotalAmount = state.totalAmount - checkItem.price
        let updatedItems = []
        if(checkItem.amount === 1){
            updatedItems = state.items.filter(item => parseInt(item.id) !== parseInt(action.id))
        } else {
            const  updatedItem = {...checkItem, amount: checkItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[index] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmount > 0 ? newTotalAmount : 0
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
