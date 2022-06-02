import styled from "styled-components";

import {blue, white, gray1} from "../globalstyling"

export const InteractiveSectionStyled = styled.div`
    width: 85vw;
    max-width: 400px;


    display: flex;
    flex-direction: column;
    gap:20px;

    .statusSelection{
        flex-basis: 33%
    }
    .statusSelection, form{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
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
        color: ${white}
    }
`