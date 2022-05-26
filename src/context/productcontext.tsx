import { createContext,useState,useEffect } from "react"
import PRODUCTS from '../assets/shop-data.json'



export const ProductsContext = createContext<any>({
    
    products:[],

})
export const ProductsProvider = ({children}:any) => {

    const [products,setProducts] = useState([])
  
    useEffect(()=>{
      fetch('https://hallfaste.com/Hally/product.json')
      .then(response => response.json())
      .then((event)=>setProducts(event))
      
    },[])

    

    
    
    const value = { products } 
    
    return(
    <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
    )
}