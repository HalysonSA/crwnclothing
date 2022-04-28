
import { 
    CategoriesContainer,
    CategoryContainer,
    CategoryBody,
    BackgroundImage
  } from '../../styles/App'
  
type categories={
    category:{
        name:string,
        description:string,
        imageUrl:string

    }[]

}


const ContainerCategories = (props:categories) =>{



return(
<CategoriesContainer>
      {props.category.map((category:any)=>(

      
      
      <CategoryContainer key={category.id}>
            <BackgroundImage style={{backgroundImage:`url(${category.imageUrl})`}} />
            <CategoryBody>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            </CategoryBody>
        </CategoryContainer>
  

     ))}
    
    </CategoriesContainer>

)
}
export default ContainerCategories;