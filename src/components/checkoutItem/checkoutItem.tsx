import { useContext } from "react";
import {CartContext} from '../../context/cartcontext'
import {Container } from './style'

import right from '../../assets/caretr.svg';
import left from '../../assets/caretl.svg';
import remove from '../../assets/remove.svg'

export const CheckoutItem = ({cartItem}:any) =>{
    const {imageUrl, name, quantity, price } = cartItem;
    const {addItemToCart,removeItemToCart, deleteItemToCart} = useContext(CartContext)
    return(

        <Container>
            
            <div className="image">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <div className="quantity-container">
                <img src={left} onClick={()=>removeItemToCart(cartItem)}/>
                <span >{quantity}</span>
                <img src={right} onClick={()=>addItemToCart(cartItem)}/>
            </div>
            <span className="price">{price}</span>
            <div  className="remove">
                <img onClick={()=>deleteItemToCart(cartItem)} src={remove}/>
            </div>
        </Container>
    )
}
export default CheckoutItem;