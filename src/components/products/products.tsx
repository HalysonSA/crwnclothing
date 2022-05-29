import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';
import {CardContainer,Footer,Price,Name,ProductsContainer,Button} from './style';



const ProductCard = ({product}:any) => {
    const {imageUrl,name,price} = product
    const {addItemToCart} = useContext(CartContext)
       
       
    const addProductToCart = () => addItemToCart(product)
    return(
       
                <CardContainer>
                        <img src={imageUrl} alt={`${name}`} />
                        <Footer>
                            <Name>{name}</Name>
                            <Price>{price}</Price>
                        </Footer>
          
                    <Button onClick={addProductToCart}>ADD TO CART</Button>
                </CardContainer>
            

      
         
         
    )
}
export default ProductCard