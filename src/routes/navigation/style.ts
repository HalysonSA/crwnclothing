import styled from "styled-components"


export const Div = styled.div`
   
    & .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }
    
        & .linkcontainer{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            & .link{
            padding: 10px 15px;  
            font-family: 'Encode Sans Semi Condensed', sans-serif;
            font-size: 18px;
            font-weight: 500;
            }

        }
    
`