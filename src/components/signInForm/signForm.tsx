import { useState} from 'react'
import {createUserEmail,
createUserGoogle} 
from '../../utills/firebase/firebase'



const defaultFormField ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

export const SignUpForm = () =>{
    const [formField,setFormField] = useState(defaultFormField)
    const {displayName,email,password,confirmPassword} = formField;
    console.log(formField)


    const handleSubmit = async(event:any) =>{

        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
      
        try {
            const { user } = await createUserEmail(email,password);
      
            await createUserGoogle(user, { displayName });
            
          } catch (error:any) {
            if (error.code === 'auth/email-already-in-use') {
              alert('Cannot create user, email already in use');
            } else {
              console.log('user creation encountered an error', error);
            }
        
        };
    }

    const handlechange = (event:any) =>{
        const {name,value} = event.target

        setFormField({...formField,[name]:value})
    }
    return(
        <div>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input type="text" required onChange={handlechange} name='displayName' value={displayName} />
                <label >E-mail</label>
                <input type="email"  required onChange={handlechange} name='email' value={email}/>
                <label >Password</label>
                <input type="password" required onChange={handlechange} name='password' value={password} />
                <label >ConfirmPassword</label>
                <input type="password" required onChange={handlechange} name='confirmPassword' value={confirmPassword} />
                <button type="submit">Submit </button>


            </form>




        </div>



    )



}