import { useState} from 'react'
import {createUserEmail,
createUserGoogle} 
from '../../utills/firebase/firebase'

import {FirebaseError} from '@firebase/util'


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
           
            const  {user}  = await createUserEmail(email,password);
            
            await createUserGoogle(user, { displayName });
            
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
                <label >Name</label>
                <input type="text"  onChange={handlechange} name='displayName' value={displayName} />
                <label >E-mail</label>
                <input type="email"   onChange={handlechange} name='email' value={email}/>
                <label >Password</label>
                <input type="password"  onChange={handlechange} name='password' value={password} />
                <label >ConfirmPassword</label>
                <input type="password"  onChange={handlechange} name='confirmPassword' value={confirmPassword} />
                <button type="submit">Submit </button>


            </form>




        </div>



    )



}