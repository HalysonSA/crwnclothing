
import { CartContext } from '../../context/cartcontext'
import {CartContainer} from './style'
import {Button} from '../signInForm/style'
import { useContext } from 'react'
import CartItem from '../cartItem/cartItem'
const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    return(
        <CartContainer>
            <div className="itens">
                   {cartItems.map((item:any)=>
                    <CartItem key={item.id} cartItem={item} />
                   
                   

                   )}
            </div>
            <Button className="button">GO TO CHECKOUT</Button>
        </CartContainer>
    )
}
export default CartDropdown