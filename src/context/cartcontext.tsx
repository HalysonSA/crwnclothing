import { createContext,useState,useEffect } from "react"

export const CartContext = createContext<any>({
    isCartOpen:false,
    setIsCartOpen:() =>{},

})
export const CartProvider = ({children}:any) => {
    
    const [isCartOpen,setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen}
    return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}