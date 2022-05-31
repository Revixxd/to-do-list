import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
            margin: 0px;
            padding: 0px;
            text-decoration: none;
            box-sizing: border-box;
        }
    body{
        display: flex;
        flex-direction: column;
        border: solid 2px;
        justify-content: space-between;
        align-items: center;
    }
`