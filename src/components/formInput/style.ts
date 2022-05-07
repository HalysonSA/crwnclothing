import styled from 'styled-components'



export const FormLabel = styled.label`
    
    color: gray;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 15px;
    transition: 300ms ease all;
   
    
`



export const InputForm = styled.input`

    background: none;
    background-color: white;
    color: gray;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid gray;
    margin: 25px 0;

    &:focus {
      outline: none;
    }
    &:valid{
      background-color:#C3DEF6;  
    }
    
    &[type="password"] {
      
      letter-spacing: 0.2rem;
    }

  
   

`
export const FormDiv = styled.div`
  
  position: relative;
  margin: 45px 0; 
      label{
        
        top: -14px;
        font-size: 12px;
        color: black;

      }
      


`