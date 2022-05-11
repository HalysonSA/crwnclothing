import {CardContainer,Footer,Price,Name,ProductsContainer,Button} from './style';

type Products={
    product:{
        id:any,
        price:number,
        imageUrl:string,
        name:string
    }[]
      
  }

const ProductCard = (props:Products) => {
    
       const {product} = props
       
       console.log('card')
    
    return(
       <ProductsContainer>
            {product.map(( product:any)=>(
                <CardContainer key={product.id} >
                    <img src={product.imageUrl} alt={`${product.name}`} />
                    <Footer>
                        <Name>
                                {product.name}
                        </Name>
                        <Price>
                                {product.price}
                        </Price>
                    </Footer>
                    <Button>ADD TO CART</Button>
                    </CardContainer>
            ))}

        </ProductsContainer>
         
         
    )
            }
export default ProductCard