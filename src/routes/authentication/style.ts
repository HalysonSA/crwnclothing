import styled from 'styled-components'


export const Div = styled.div`
    
    display: grid;
    gap:5rem;
    margin:2rem;
    
    
  
    
    *{
        font-family: 'Encode Sans Semi Condensed', sans-serif;
    }


`
export const DivForm=styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const FormGrid = styled.div`
    grid-area:  1 / 2/
                1 / 2;
    width: 70%;
    
    

`
export const Button = styled.button`
    display: flex;
    justify-content:center;
    width: auto;
    height: 50px;
    color:white;
    background-color:#0086FF;
    transition: 0.4s;
    padding:1rem;
    min-width: 165px;
    width: auto;
    border:none;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    font-weight: normal;
    
    &:hover{
        background-color:#499FED;
        
        border: none;

       
    }
`