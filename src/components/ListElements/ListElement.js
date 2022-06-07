import React from "react"

//styling
import {ListElementContainer} from "./listElementStyling"

function ListElement(props){
    return(
        <ListElementContainer> 
            <input 
            type="checkbox" 
            checked={props.task.completed} 
            onChange={() => props.changeComplete(props.task.id)} 
            ></input>
            <h2 className={props.task.completed ? "elementCrossed" : ""}>{props.task.content}</h2>
        </ListElementContainer>
    )
}

export default ListElement