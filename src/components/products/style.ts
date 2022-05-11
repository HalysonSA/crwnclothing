import styled from 'styled-components'

export const CardContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`
export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`
export const Price = styled.span`
    width: 10%;
`
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 10px;
    row-gap: 50px;
`

export const Button = styled.button`
    display: flex;
    justify-content:center;

    width: auto;
    height: 50px;   
    color:black;
    background-color:white;
  
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
        background-color:black;
        color:white;
        border: 1px solid black;

       
    }
`