import styled from 'styled-components'

export const Container = styled.div`
    
    display: grid;
    grid-template-columns: 30% 25% 12% 12% 10%;
    grid-gap: 15px;
    text-align: center;
    justify-content: center;
    
    align-items: center;
   
    margin: 1em;

    div{ 
        margin: 10px ;
        span{
           
        }
    }
`
export const Div = styled.div`
    padding: 5rem;
    .total{
        font-size: 23px;
        margin:1em;
        float: right;
    }
    .empty{
        margin: 0.4rem;
        display: flex;
        flex-direction: column;
    }
`
export const BR  = styled.div`

    width: 100%;
    border: 1px solid darkgrey;
`
