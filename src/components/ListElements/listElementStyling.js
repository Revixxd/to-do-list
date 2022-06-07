import styled from "styled-components";

export const ListElementContainer = styled.div`

    .elementCrossed{
        text-decoration: line-through;
    }
    padding: 5px 5px;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    .leftBox{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
`