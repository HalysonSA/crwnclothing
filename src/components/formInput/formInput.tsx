import { InputForm,FormDiv,FormLabel } from './style'

export const FormInput = ({label,...otherProps}:any) => {

   
    return(
        <FormDiv>
            <FormLabel>
                {label}
            </FormLabel>
            <InputForm {...otherProps} />


        </FormDiv>

           
            



        
      
    )
}
