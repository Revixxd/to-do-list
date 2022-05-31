import ListElement from "./ListElement"
function ListElementsContainer(props){
    const tasks = props.tasks.map(item => {
        return(
            <ListElement task = {item}/>
        )
    })
    return(
        <>
            {tasks}
        </>
    )
}
export default ListElementsContainer