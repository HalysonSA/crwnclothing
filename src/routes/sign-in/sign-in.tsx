import { SignUpForm } from '../../components/signInForm/signForm'
import {signInWithGooglePopUp,createUserGoogle} from '../../utills/firebase/firebase'
import {
    
    Button} from './style'

const SignIn = () => {
    const login = async () => {
        const {user} = await signInWithGooglePopUp()
        const userDocRef = await createUserGoogle(user)
    }
    return (
        <div>
            <h1>I Already have an account </h1>
            <p>Sign in with your email and password</p>
          
                <Button onClick={login}>SIGN IN</Button>
                


            <SignUpForm/>
        </div>
        
        )

}
export default SignIn;