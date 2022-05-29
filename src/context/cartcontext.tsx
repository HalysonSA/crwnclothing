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


const removeCartItem = (cartItems:any,productToRemove:any) => {
    const existingCartItems = cartItems.find((cartItem:any)=>cartItem.id===productToRemove.id);

    if(existingCartItems.quantity===1){
        return (
            cartItems.filter((cartItem:any)=>cartItem.id!==productToRemove.id)
        )
    }

    return cartItems.map((cartItem:any)=>
    cartItem.id===productToRemove.id 
    ?{...cartItem, quantity: cartItem.quantity -1}
    : cartItem
    )
}

const deleteCartItem = (cartItems:any,productToDelete:any) => {
    const existingCartItems = cartItems.find((cartItem:any)=>cartItem.id===productToDelete.id);

    if(existingCartItems.quantity>0){
        cartItems.map((cartItem:any)=>
        cartItem.id===productToDelete.id 
        ?{...cartItem, quantity: cartItem.quantity = 0}
        : cartItem
        )    
    }
    
    return(
        cartItems.filter((cartItem:any)=>cartItem.id!==productToDelete.id)
        )
    
}



export const CartContext = createContext<any>({
    isCartOpen: false,
    setIsCartOpen:() => {},
    cartItems: [],
    addItemToCart:() => {},
    removeItemToCart:()=>{},
    deleteCartItem:()=>{},
    cartCount:0,
    cartPrice:0,
})


export const CartProvider = ({children}:any) => {
    const [cartItems,setCartItems] = useState<any>([]);
    const [cartCount,setCartCount] = useState(0);
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartPrice,setCartPrice] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total:any,cartItem:any)=> total + cartItem.quantity,0 )
        const newCartPrice = cartItems.reduce((total:any,cartItem:any)=> total+ cartItem.quantity * cartItem.price,0)
        setCartCount(newCartCount);
        setCartPrice(newCartPrice);
    },[cartItems])


   const addItemToCart = (productToAdd:any) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removeItemToCart = (productToRemove:any) => {
        setCartItems(removeCartItem(cartItems,productToRemove))
    }
    const deleteItemToCart = (productToDelete:any) => {
        setCartItems(deleteCartItem(cartItems,productToDelete))
    }

    const value = {isCartOpen, setIsCartOpen,deleteItemToCart,removeItemToCart,addItemToCart, cartItems,cartCount,cartPrice}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
}