import {Image} from './style'
const CartItem = ({ cartItem}:any) =>{
    const {imageUrl, name, quantity, price } = cartItem;
    return(
        <div>
            <Image src={imageUrl}/>
            <h2>{name}</h2>
            <span>{quantity} x R${price}</span>
        </div>
    )
}
export default CartItem