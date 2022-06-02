import { createGlobalStyle } from 'styled-components'

export const mainColor = "#333333";
export const white = "#ffffff"
export const gray1 = "#BDBDBD";
export const gray2 = "#828282";
export const blue = "#2F80ED";
export const GlobalStyles = createGlobalStyle`
    *{
            margin: 0px;
            padding: 0px;
            text-decoration: none;
            box-sizing: border-box;
            color: ${mainColor};
        }
    body{
        background-color: ${white};
        font-family: 'Montserrat', sans-serif;
        
    }

    h1{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        text-align: center;
    }

    .container{
        height:100vh;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .container--mainElement{
        display: flex;
        flex-direction: column;
        gap: 30px
    }
`