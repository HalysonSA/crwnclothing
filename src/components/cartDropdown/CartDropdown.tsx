
import { CartContext } from '../../context/cartcontext'
import {CartContainer,Button} from './style'
import { useContext } from 'react'
import CartItem from '../cartItem/cartItem'
const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    return(
        <CartContainer>
            <div >
                   {cartItems.length ? (
                   cartItems.map((item:any)=>(
                       
                    <CartItem key={item.id} cartItem={item} />
                   ))
                   
    ):(
    <span >Your Cart is empty</span>
    )}
                   
               
                    
               
                    
            </div>
           
            <Button  >GO TO CHECKOUT</Button>
        </CartContainer>
    )
}
export default CartDropdown