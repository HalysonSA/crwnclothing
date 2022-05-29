
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartcontext";
import {Div} from './style' 
import { Container,BR } from "./style";
import CheckoutItem from '../../components/checkoutItem/checkoutItem'
const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart, cartPrice} = useContext(CartContext)
    
    return(
        <Div>
            <Container>
                <div >
                    <span>Product</span>
                </div> 
                <div>
                    <span>Description</span>
                </div> 
                <div >
                    <span>Quantity</span>
                    
                </div>        
                <div >
                    <span>Price</span>
                </div>
                <div >
                    <span>Remove</span>
                </div>    
            </Container> 
             {cartItems.length ?  
                   (cartItems.map((cartItem:any) => {
            
                  
                  return(   
                    <div>
                        <BR/>
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        
                    </div>
                    

                  )

                  })) : (<div className="empty">
                      <span >Your cart is empty</span>
                      <span>Go to store</span>
                      </div>)}
                  
                   <BR/>
                 <span className="total">Total: R${cartPrice}</span> 
           
        </Div>
    )
}
export default Checkout