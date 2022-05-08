import {useEffect,useState,useContext} from 'react'
/*import ShopProduct from '../../components/products/products'*/
import { ProductsContext } from '../../context/productcontext'


const Shop = () => {
  const {products} = useContext(ProductsContext)
  /*const [product, setProduct] = useState([])

  useEffect(()=>{
    fetch('https://hallfaste.com/Hally/product.json')
    .then(response => response.json())
    .then((event)=>setProduct(event))
  },[product])*/
    return(
      <div>
          {/* <ShopProduct product={product}/>*/}


          {products.map(( { id , name}:any)=>(
            <div key={id}>
                <h1>{name}</h1>

              </div>
          ))}
      </div>
     
      
    )
    
  }
  export default Shop;