import { InteractiveSectionStyled } from "./interactiveSectionstyling"

function InteractiveSection(props){
    return(
        <InteractiveSectionStyled>
            <nav className="statusSelection">
                <h3>All</h3>
                <h3>Active</h3>
                <h3>Completed</h3>
            </nav>
            <hr></hr>
                <form  onSubmit={props.addTask}>
                    <input placeholder="add task..." type ="text" value={props.task} onChange={(e) => props.setTask(e.target.value)}></input>
                    <button type="sumbit">Add</button>
                </form>
        </InteractiveSectionStyled>
    )
}
export default InteractiveSection