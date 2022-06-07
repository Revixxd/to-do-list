import React from "react"
import {RiDeleteBin6Line} from "react-icons/ri"

//styling
import {ListElementContainer} from "./listElementStyling"

function ListElement(props){
    function showBin(){
        if(props.state === "completed"){
            return true
        }

    }
    return(
        <ListElementContainer> 
            <div className="leftBox">
                <input 
                type="checkbox" 
                checked={props.task.completed} 
                onChange={() => props.changeComplete(props.task.id)} 
                >
                </input>
                <h2 className={props.task.completed ? "elementCrossed" : ""}>{props.task.content}</h2>
            </div>
            {showBin() ? <RiDeleteBin6Line onClick={()=>props.deleteTask(props.task.id)}/> : ""}
        </ListElementContainer>
    )
}

export default ListElement