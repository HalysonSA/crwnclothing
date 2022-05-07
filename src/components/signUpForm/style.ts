import styled from "styled-components"

export const Div = styled.div`
        grid-area: 1 / 2
                / 1 / 2;
    h1{
        font-family: 'Encode Sans Semi Condensed', sans-serif;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content:center;

    width: auto;
    height: 50px;   
    color:white;
    background-color:black;
  
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
        background-color:white;
        color:black;
        border: 1px solid black;

       
    }
`