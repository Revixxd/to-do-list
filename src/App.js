
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
  
  const [task, setTask] = React.useState("")


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

      //clear passed task
      setTask("")
      
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
            />
            <ListElementsContainer tasks = {allTasks} />
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
