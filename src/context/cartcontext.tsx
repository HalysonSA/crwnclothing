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
    cartCount:0,
    cartPrice:0,
})
export const CartProvider = ({children}:any) => {
    const [cartItems,setCartItems] = useState<any>([]);
    const [cartCount,setCartCount] = useState(0);
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartPrice,setCartPrice] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total:any,cartItem:any)=> total + cartItem.quantity, 0)
        const newCartPrice = cartItems.reduce((total:any,cartItem:any)=> total + cartItem.price, 0)
        setCartCount(newCartCount);
        setCartPrice(newCartPrice);
    },[cartItems])


   const addItemToCart = (productToAdd:any) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems,cartCount,cartPrice}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
}