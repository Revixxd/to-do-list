import React from "react"

//styling
import {ListElementContainer} from "./listElementStyling"

function ListElement(props){

    const [currentElementComplite, setCurrentElementComplite] = React.useState(props.task.complite)

    function changeTaskState(){
        //for element state
        setCurrentElementComplite(prev => !prev)
        //for object propertie
        props.task.complite = !props.task.complite
    }

    return(
        <ListElementContainer> 
            <input onClick={changeTaskState} type="checkbox"></input>
            <h1 className={currentElementComplite ? "elementCrossed" : ''}>{props.task.content}</h1>
        </ListElementContainer>
    )
}

export default ListElement