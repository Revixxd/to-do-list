import ListElement from "./ListElement"
function ListElementsContainer(props){
    const tasks = props.tasks.map(task => {
        return(
            <ListElement key={task.id} task={task} changeComplete={props.changeComplete} deleteTask = {props.deleteTask} state = {props.state}/>
        )
    })
    return(
        <div>
            {tasks}
        </div>
    )
}
export default ListElementsContainer