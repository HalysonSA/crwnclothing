import styled from "styled-components"

export const CartContainer = styled.div`
    position: absolute;
    width: 16rem;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 7rem;
    right: 2.5rem;
    z-index: 5;
    overflow-y:scroll;
    
    ::-webkit-scrollbar{width:6px;}
    ::-webkit-scrollbar-thumb{background-color:#000;border-radius:20px;}

    &.items{
        height: 240px;
        display: flex;
        flex-direction: column;
        
    }
    
    &.empty{
        font-size: 18px;
        margin: 50px auto;
    }
    &.button{
        margin-top: auto;
    }
`

export const Button = styled.button`
    
    
    display: flex;
    justify-content:center;

    margin-top: auto;
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



