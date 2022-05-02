import styled from 'styled-components'



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
    font-family: 'Open Sans Condensed';
    font-weight: normal;
    
    &:hover{
        background-color:#357ae8;
        
        border: none;

       
    }
`