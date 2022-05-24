import { createContext,useState,useEffect } from "react"

const addCartItem = (cartItems:any,productToAdd:any) => {

    const existingCartItems = cartItems.find((cartItem:any)=>cartItem.id===productToAdd.id);

    if(existingCartItems){
        return cartItems.map((cartItem:any)=>
        cartItem.id===productToAdd.id 
        ?{...cartItem, quantity: cartItem.quantity +1}
        : cartItem
        )
    }

    return  [...cartItems,{...productToAdd,quantity:1}] 
}



export const CartContext = createContext<any>({
    isCartOpen: false,
    setIsCartOpen:() => {},
    cartItems: [],
    addItemToCart:() => {},
})
export const CartProvider = ({children}:any) => {
    const [cartItems,setCartItems] = useState<any>([])
    const [isCartOpen,setIsCartOpen] = useState(false);

   const addItemToCart = (productToAdd:any) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
}