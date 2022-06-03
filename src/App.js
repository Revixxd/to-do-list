
// importing components
import Header from "./components/Header/Header";
import InteractiveSection from "./components/InteractiveSection/InteractiveSection";
import ListElementsContainer from "./components/ListElements/ListElementsContainer";
import Footer from "./components/Footer/Footer";

// importing styling 
import {GlobalStyles} from "./components/globalstyling"
import React from "react";


function App() {
  

  const [allTasks, setallTasks] = React.useState([])
  const [activeTasks, setActiveTasks] = React.useState([])
  const [completedTasks, setCompletedTasks] = React.useState(allTasks)
  
  const [task, setTask] = React.useState("")

  const [currentList, setCurrentList] = React.useState([])
  function addTask(e){
    //bellow declare to now refresh after button sumbit
    e.preventDefault()
    //check if input value has value
    if(!task){
      window.alert("input can't be empty")
    }else{
      //declaring new object 
      const newTask = {
        id: new Date().getTime(),
        content: task,
        completed: false,
      }
      
      //new object is passed to existed array
      setallTasks([...allTasks].concat(newTask))
      setActiveTasks(allTasks.filter((element) => element.completed === false))
      //clear passed task
      setTask("")
      
    }
    
  }

  function changeComplete(id) {
    let updatedList =[...allTasks].map((element)=>{
      if(element.id === id){
        element.completed = !element.completed
        setCompletedTasks(allTasks.filter((element) => element.completed === true))
        setActiveTasks(allTasks.filter((element) => element.completed === false))
      }
      return element;
    })
    setallTasks(updatedList);
  }


  function changeStatus(parametr){
    switch (parametr.target.textContent){
      case "All":
        setCurrentList(allTasks)
        break;
      case "Active":
        setCurrentList(activeTasks)
        console.log("active");
        break;
      case "Completed":
        setCurrentList(completedTasks)
        console.log("Completed");
        break;
    }
  }

  return (
    <>
      <GlobalStyles />
      <div className="container">
          <div className="container--mainElement">
            <Header/>
            <InteractiveSection 
            addNewTask= {setallTasks}
            addTask ={addTask}
            setTask = {setTask}
            task= {task}
            changeStatus = {changeStatus}
            />
            <ListElementsContainer tasks = {currentList} changeComplete={changeComplete} />
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
