import ShoppingBag from '../../assets/shopping-bag.svg'
import {CartIcon, Bag, ItemCount} from './style'
import { CartContext } from '../../context/cartcontext'
import { useContext } from 'react'
const CardIcon = () => {
    const {cartCount} = useContext(CartContext)
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    
    const toggle = () => setIsCartOpen(!isCartOpen)
    return(
       
        <CartIcon onClick={toggle}>
             <Bag src={ShoppingBag} />
             <ItemCount>{cartCount}</ItemCount>
        </CartIcon>
    )
}
export default CardIcon