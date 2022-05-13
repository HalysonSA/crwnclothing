import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    body{
        padding:20px 40px;
        font-family: 'Open Sans Condensed', sans-serif;
    }
    *{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        font-family: 'Open Sans Condensed', sans-serif;
       
        button{
            cursor:pointer;

        }
        
        button{
        outline: none;
        border: none;
        }
        *,a{
            text-decoration: none;
            color:black;

    }
}
`