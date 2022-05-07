import styled from 'styled-components'


export const Div = styled.div`
    
    display: grid;
    margin:2rem;
    
  
    
    *{
        font-family: 'Encode Sans Semi Condensed', sans-serif;
    }


`
export const FormGrid = styled.div`
    grid-area:  1 / 2
                1 / 2;

`
export const Button = styled.button`
    display: flex;
    justify-content:center;
    width: auto;
    height: 50px;
    color:white;
    background-color:#4285f4;
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
        background-color:#357ae8;
        
        border: none;

       
    }
`