import {signInWithGooglePopUp,createUser} from '../../utills/firebase/firebase'


const SignIn = () => {
    const login = async() => {
        const {user} = await signInWithGooglePopUp()
        const userDocRef = await createUser(user)
    }
    return (
        <div>
            <h1>sign in</h1>
            <button onClick={login}>Login com o google</button>

        </div>
        
        )

}
export default SignIn;