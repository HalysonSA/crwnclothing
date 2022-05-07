import { SignUpForm } from '../../components/signUpForm/signUpForm'
import {SignInForm} from '../../components/signInForm/signInForm'
import {signInWithGooglePopUp,
    createUserGoogle,
    signUserEmail


} from '../../utills/firebase/firebase'
import {
    FormGrid,
    Div,
    Button} from './style'

const Authtentication = () => {
    const login = async () => {
        const {user} = await signInWithGooglePopUp()
        const userDocRef = await createUserGoogle(user)
    }
      
    
    return (
        
                <Div >
                    <FormGrid>
                        <h1>I Already have an account </h1>
                        <p>Sign in with your email and password</p>
                        <Button onClick={login}>SIGN IN</Button>
                        <SignInForm/>
                    </FormGrid>
                    
            
                    
                    <SignUpForm/>



                    
                </Div>
                    
                
        
            
            
      
        
        
        )

}
export default Authtentication;