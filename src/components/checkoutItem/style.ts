import styled from 'styled-components';


export const Container = styled.div`
    
    display: grid;
    grid-template-columns: 30% 25% 12% 12% 10%;
    grid-gap: 15px;
    text-align: center;

    justify-content: center;
    align-items: center;

    margin: 1em;
    
    font-weight: 400;
    font-size: 18px;


    .image{
        img{
        width: 80%;
        }
    }
    
    img{
        width:30%;
        
    }
    .quantity-container{
        img{
            width: 10%;
            cursor: pointer;
        }
        span{
            padding: 0.2em;
        }
    }
    .remove{
        img{
            cursor: pointer;
        }
    }

`

  

