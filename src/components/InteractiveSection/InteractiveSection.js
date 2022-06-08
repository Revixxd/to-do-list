import { InteractiveSectionStyled } from "./interactiveSectionstyling"

function InteractiveSection(props){
    return(
        <InteractiveSectionStyled>
            <nav className="statusSelection">
                <div className="statusSelection--element">
                    <h3 onClick={() => props.changeShowedState("all")}>All</h3>
                </div>
                <div className="statusSelection--element">
                    <h3 onClick={() => props.changeShowedState("active")}>Active</h3>
                </div>
                <div className="statusSelection--element">
                    <h3 onClick={() => props.changeShowedState("completed")}>Completed</h3>
                </div>
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