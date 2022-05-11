import {useEffect,useState,useContext} from 'react'
/*import ShopProduct from '../../components/products/products'*/
import { ProductsContext } from '../../context/productcontext'
import ProductCard from '../../components/products/products'


const Shop = () => {
  const {products} = useContext(ProductsContext)
  console.log('shop')
    return(
      
         
           <ProductCard product={products}/>
       
      
 
     
      
    )
    
  }
  export default Shop;