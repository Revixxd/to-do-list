
// importing components
import Header from "./components/Header/Header";
import InteractiveSection from "./components/InteractiveSection/InteractiveSection";
import ListElementsContainer from "./components/ListElements/ListElementsContainer";
import Footer from "./components/Footer/Footer";

// importing styling 
import {GlobalStyles} from "./components/globalstyling"
import React, { useEffect } from "react";


function App() {
  

  const [allTasks, setallTasks] = React.useState([{
    id:1,
    content: "test1",
    completed: false
    },
    {
    id:2,
    content: "test2",
    completed: true
    }
  ])
  const [task, setTask] = React.useState("")
  
  const activeTasks = allTasks.filter(item => item.completed === false )
  const completedTasks = allTasks.filter(item => item.completed === true)
  
  const [currentShowedList, setCurrentShoweList] = React.useState(allTasks)
  const currentStatus = "active"


  function test(currentStatus){
    switch (currentStatus){
    case 'all':
      setCurrentShoweList(allTasks)
      break;
    case 'active':
      setCurrentShoweList(activeTasks)
      break;
    case 'completed':
      setCurrentShoweList(completedTasks)
      break;
    }
  }


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
      console.log(allTasks)
    }
    
  }
  function changeComplete(id){
    let newList = [...allTasks].map(item =>{
      if(item.id === id){
        item.completed = !item.completed
      }
      return item;
    })
    setallTasks(newList)
    
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
            changeShowedState = {test}
            />
            <ListElementsContainer tasks = {currentShowedList} changeComplete = {changeComplete}/>
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
