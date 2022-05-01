import { SignUpForm } from '../../components/signInForm/signForm'
import {signInWithGooglePopUp,createUserGoogle} from '../../utills/firebase/firebase'


const SignIn = () => {
    const login = async () => {
        const {user} = await signInWithGooglePopUp()
        const userDocRef = await createUserGoogle(user)
    }
    return (
        <div>
            <h1>sign in</h1>
            <button onClick={login}>Login com o google</button>
            <SignUpForm/>
        </div>
        
        )

}
export default SignIn;