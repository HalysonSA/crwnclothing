import { createContext,useState,useEffect } from "react"
import PRODUCTS from '../assets/shop-data.json'

export const ProductsContext = createContext<any>({
    products:[],

})
export const ProductsProvider = ({children}:any) => {

    const [products,setProducts] = useState(PRODUCTS);
    const value = {products}
    return(
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}