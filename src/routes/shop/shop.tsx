import {useEffect,useState,useContext} from 'react'
/*import ShopProduct from '../../components/products/products'*/
import { ProductsContext } from '../../context/productcontext'
import ProductCard from '../../components/products/products'
import { ProductsContainer } from '../../components/products/style'

const Shop = () => {
  const {products} = useContext(ProductsContext)
 
    return(
      <ProductsContainer> 
        {products.map((product:any)=>(
          <ProductCard key={product.id} product={product}/>
        ))}   
          {/*   <ProductCard product={products}/> */}
       
      </ProductsContainer>
  
    )
  }
  export default Shop;