import styled from "styled-components";

import {blue, white, gray1} from "../globalstyling"

export const InteractiveSectionStyled = styled.div`
    width: 85vw;
    max-width: 400px;


    display: flex;
    flex-direction: column;
    gap:20px;


    .statusSelection, form{
        display: flex;
        flex-direction: row;


    }
    .statusSelection--element{
        width: 200px;
        text-align: center;
        cursor: pointer
    }

    .statusSelection__element--selected{
        color:${blue};
        transition: color 0.2s ;

    }
    form{
        gap: 1rem;
    }
    form > input {
        width: 90%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid ${gray1};
        background-color: transparent;
    }

    form > button{
        border-radius: 6px;
        padding: 0px 25px;
        border: none;
        background-color: ${blue};
        color: ${white};
        cursor: pointer;
    }
`