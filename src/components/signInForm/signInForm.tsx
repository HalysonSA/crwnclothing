import { useState} from 'react'
import {createUserGoogle,signUserEmail} 
from '../../utills/firebase/firebase'

import {FirebaseError} from '@firebase/util'
import {
    Div,
    Button
} from './style'

import { FormInput } from '../formInput/formInput'

const defaultFormField ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}



export const SignInForm = () =>{
    const [formField,setFormField] = useState(defaultFormField)
    const {displayName,email,password,confirmPassword} = formField;
    console.log(formField)
    const resetForm = () => {
        setFormField(defaultFormField);
    }

    const handleSubmit = async(event:any) =>{

        event.preventDefault();

        
        if(password.length < 6){
            alert('password needs at least 6 digits')
        }
        
      
        try {
           
            const  response  = await signUserEmail(email,password);
            
                console.log(response)
            alert('login')
            resetForm();
          } catch (error) {
            
        
            if(error instanceof FirebaseError) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use');
                    
                }
                else if(error.code ==='auth/user-not-found'){
                    alert('Invalid User')
                }
                else if(error.code === 'auth/wrong-password'){
                    alert(`Wrong Password`)
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
            
            <form onSubmit={handleSubmit}>
                   
                <FormInput label="E-mail" type="email"  onChange={handlechange} name='email' value={email}/>
                <FormInput label="Password" type="password"  onChange={handlechange} name='password'  value={password}/>

                
                <Button type="submit">SIGN IN</Button>

            </form>




        </Div>



    )



}