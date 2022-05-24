
import {Container,Details} from './style'
const CartItem = ({ cartItem}:any) =>{
    
    const {imageUrl, name, quantity, price } = cartItem;
    return(
        <Container>
            <img src={imageUrl} alt={`${name}`}/>
            <Details>

                <span className='name'> {name} </span>
                <span className='price'>
                    {quantity} x R${price}
                </span>
                
            </Details>
            
        </Container>
        
    )
}
export default CartItem