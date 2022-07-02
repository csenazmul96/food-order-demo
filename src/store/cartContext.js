import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addCart: ()=>{},
    removeCart: (id)=>{}
})

export default CartContext
