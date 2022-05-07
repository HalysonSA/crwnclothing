import { SignUpForm } from '../../components/signUpForm/signUpForm'
import {SignInForm} from '../../components/signInForm/signInForm'
import {signInWithGooglePopUp,
    createUserAuth,
   


} from '../../utills/firebase/firebase'
import {
    FormGrid,
    Div,
    DivForm,
    Button} from './style'


const Authtentication = () => {
       

      
    
    return (
        
                <Div >
                    <DivForm>
                        <FormGrid>
                            <h1>Already have an account? </h1>
                            <p>Sign in with your email and password</p>
                            
                            <SignInForm/>
                            
                        </FormGrid>


                    </DivForm>
                    
                        <SignUpForm/>
                   
                         
                </Div>
                    
        )

}
export default Authtentication;