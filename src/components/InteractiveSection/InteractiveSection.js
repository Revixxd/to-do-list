function InteractiveSection(){
    return(
        <div className="interactiveSectionContainer">
            <div className="interactiveSectionContainer--statusSelection">
                <h3>All</h3>
                <h3>Active</h3>
                <h3>Completed</h3>
            </div>
            <div className="interactiveSectionContainer--addElement">
                <input placeholder="add details"></input>
                <button>Add</button>
            </div>   
        </div>
    )
}
export default InteractiveSection