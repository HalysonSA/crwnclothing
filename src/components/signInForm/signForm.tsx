import { useState} from 'react'
import {createUserEmail,
createUserGoogle} 
from '../../utills/firebase/firebase'

import {FirebaseError} from '@firebase/util'
import {
    
    Button
} from './style'

import { FormInput } from '../formInput/formInput'

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
    const resetForm = () => {
        setFormField(defaultFormField);
    }

    const handleSubmit = async(event:any) =>{

        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
      
        try {
           
            const  {user}  = await createUserEmail(email,password);
            
            await createUserGoogle(user, { displayName });
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
        <div>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                
                
                
                
                <FormInput label="Name" type="text"  onChange={handlechange} name='displayName' value={displayName}/>
                <FormInput label="E-mail" type="email"  onChange={handlechange} name='email' value={email}/>
                <FormInput label="Password" type="password"  onChange={handlechange} name='password' value={password}/>
                <FormInput label="ConfirmPassword" type="password"  onChange={handlechange} name='confirmPassword' value={confirmPassword}/>
                
                
                <Button type="submit">SIGN UP</Button>

            </form>




        </div>



    )



}