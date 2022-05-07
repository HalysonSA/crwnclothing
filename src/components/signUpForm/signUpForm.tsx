import { useContext, useState} from 'react'
import {createUserEmail,
createUserAuth} 
from '../../utills/firebase/firebase'

import {FirebaseError} from '@firebase/util'
import {
    Div,
    Button
} from './style'

import { FormInput } from '../formInput/formInput'
import { UserContext } from '../../context/usercontext'

const defaultFormField ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}



export const SignUpForm = () =>{
    const [formField,setFormField] = useState(defaultFormField)
    const {displayName,email,password,confirmPassword} = formField;
 
    const {setCurrentUser} = useContext(UserContext)

    const resetForm = () => {
        setFormField(defaultFormField);
    }

    const handleSubmit = async(event:any) =>{

        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        else if(password.length < 6){
            alert('password needs at least 6 digits')
        }
        
      
        try {
           
            const  {user}  = await createUserEmail(email,password);
            setCurrentUser(user);
            await createUserAuth(user, { displayName });
            alert('User was created successfully')
            resetForm();
          } catch (error) {
            if(error instanceof FirebaseError) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use');
                    
                }
                
                 

            }
            else{
                  alert(`error : ${error}`);    
            }
            
        
        };
    }

    const handlechange = (event:any) =>{
        const {name,value} = event.target

        setFormField({...formField,[name]:value})
    }
   
    return(
        <Div>
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                
                
                
                
                <FormInput label="Name" type="text"  onChange={handlechange} name='displayName' value={displayName}/>
                <FormInput label="E-mail" type="email"  onChange={handlechange} name='email' value={email}/>
                <FormInput label="Password" type="password"  onChange={handlechange} name='password'   value={password}/>
                <FormInput label="ConfirmPassword" type="password"  onChange={handlechange} name='confirmPassword'  value={confirmPassword}/>
                
                
                <Button type="submit">SIGN UP</Button>

            </form>




        </Div>



    )



}