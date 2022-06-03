
// importing components
import Header from "./components/Header/Header";
import InteractiveSection from "./components/InteractiveSection/InteractiveSection";
import ListElementsContainer from "./components/ListElements/ListElementsContainer";
import Footer from "./components/Footer/Footer";

// importing styling 
import {GlobalStyles} from "./components/globalstyling"
import React from "react";


function App() {
  

  const [currentTasks, setCurrentTasks] = React.useState([])
  const [task, setTask] = React.useState("")


  function addTask(e){
    //bellow declare to now refresh after button sumbit
    e.preventDefault()
    //check if input value has value
    if(!task){
      window.alert("input cant be empty")
    }else{
      //declaring new object 
      const newTask = {
        id: new Date().getTime(),
        content: task,
        completed: false,
      }
      
      //new object is passed to existed array
      setCurrentTasks([...currentTasks].concat(newTask))
      
      //clear passed task
      setTask("")
      
    }
    
  }

  function changeComplete(id) {
    let updatedList =[...currentTasks].map((element)=>{
      if(element.id === id){
        element.completed = !element.completed
      }
      return element;
    })
    setCurrentTasks(updatedList);
  }

  const [activeCurrentTask, setCurrentActiveTask] = React.useState([])
  const [currentDoneTask, setCurrentDoneTask] = React.useState([])
  

  function filterArray(){
    setCurrentActiveTask([...currentTasks].filter((element) => element.completed !== true))
    setCurrentDoneTask([...currentTasks].filter((element) => element.completed === true))
    
  }
  

  return (
    <>
      <GlobalStyles />
      <div className="container">
          <div className="container--mainElement">
            <Header/>
            <InteractiveSection 
            addNewTask= {setCurrentTasks}
            addTask ={addTask}
            setTask = {setTask}
            task= {task}
            />
            <ListElementsContainer tasks = {currentTasks} changeComplete={changeComplete}/>
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
