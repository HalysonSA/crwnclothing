import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        button{
            cursor:pointer;

        }
        input{

        }
        *,input,button{
        outline: none;
        border: none;
        }
    }
`