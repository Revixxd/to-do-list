import ListElement from "./ListElement"
function ListElementsContainer(props){
    const tasks = props.tasks.map(item => {
        return(
            <ListElement key={item.id} task = {item}/>
        )
    })
    return(
        <div>
            {tasks}
        </div>
    )
}
export default ListElementsContainer