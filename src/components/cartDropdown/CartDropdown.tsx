
import { CartContext } from '../../context/cartcontext'
import {CartContainer,Button} from './style'
import { useContext } from 'react'
import CartItem from '../cartItem/cartItem'
const CartDropdown = () =>{
    const {cartItems,cartPrice} = useContext(CartContext)
    return(
        <CartContainer>
            <div className="items">
                   {cartItems.length ? (
                   cartItems.map((item:any)=>(
                       
                    <CartItem key={item.id} cartItem={item} />
                   ))
                   
    ):(
    <span className='empty'>Your Cart is empty</span>
    )}
                   
               
                    
               
                    
            </div>
            <span >Total: {cartPrice}</span>
            <Button className='button' >GO TO CHECKOUT</Button>
        </CartContainer>
    )
}
export default CartDropdown