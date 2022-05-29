
import { CartContext } from '../../context/cartcontext'
import {CartContainer,Button} from './style'
import { useContext } from 'react'
import CartItem from '../cartItem/cartItem'
import { useNavigate } from 'react-router-dom'
const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutHandler = () =>{navigate('/checkout')}
    
    return(
        <CartContainer>
            <div >
                   {cartItems.length ? (
                   cartItems.map((item:any)=>(
                       
                    <CartItem key={item.id} cartItem={item} />
                   ))
                   
    ):(
        <div>
            <span >Your Cart is empty</span>
            
        </div>
    
    )}
    
                    
            </div>
           
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartContainer>
    )
}
export default CartDropdown