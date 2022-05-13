import ShoppingBag from '../../assets/shopping-bag.svg'
import {CartIcon, Bag, ItemCount} from './style'
import { CartContext } from '../../context/cartcontext'
import { useContext } from 'react'
const CardIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggle = () => setIsCartOpen(!isCartOpen)
    return(
       
        <CartIcon onClick={toggle}>
             <Bag src={ShoppingBag} />
             <ItemCount>0</ItemCount>
        </CartIcon>
    )
}
export default CardIcon