import React, { useEffect } from "react";

// importing components
import Header from "./components/Header/Header";
import InteractiveSection from "./components/InteractiveSection/InteractiveSection";
import ListElementsContainer from "./components/ListElements/ListElementsContainer";
import Footer from "./components/Footer/Footer";

// importing styling 
import {GlobalStyles} from "./components/globalstyling"


function App() {
  

  const [allTasks, setallTasks] = React.useState([{
    id:1,
    content: "Learn HTML/CSS",
    completed: true
    },
    {
      id:2,
      content: "Learn JavaScript",
      completed: true
    },
    {
      id:3,
      content: "Learn Git with Github",
      completed: true
    },
    {
      id:4,
      content: "Try to understand React",
      completed: false
    }
  ])
  const [task, setTask] = React.useState("")
  
  const activeTasks = allTasks.filter(item => item.completed === false )
  const completedTasks = allTasks.filter(item => item.completed === true)
  
  const [currentShowedList, setCurrentShoweList] = React.useState(allTasks)

  const [state, setState] = React.useState('all')

  function changeState(currentStatus){
    switch (currentStatus){
    case 'all':
      setCurrentShoweList(allTasks);
      setState("all");
      break;
    case 'active':
      setCurrentShoweList(activeTasks);
      setState("active");
      break;
    case 'completed':
      setCurrentShoweList(completedTasks);
      setState("completed");
      break;
    default:
      setCurrentShoweList(allTasks);
      setState("all");
      break;
    }

  }

  useEffect(()=>{
    switch (state){
      case 'all':
        setCurrentShoweList(allTasks)
        break;
      case 'active':
        setCurrentShoweList(activeTasks)
        break;
      case 'completed':
        setCurrentShoweList(completedTasks)
        break;
      default:
        setCurrentShoweList(allTasks)
        break;
      }
      
  },[allTasks])
  


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
  function changeComplete(id){
    let newList = [...allTasks].map(item =>{
      if(item.id === id){
        item.completed = !item.completed
      }
      return item;
    })
    setallTasks(newList)
    
  }

  function deleteTask(id){
    let newList = [...allTasks].filter(item => item.id !== id)
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
            changeShowedState = {changeState}
            />
            <ListElementsContainer tasks = {currentShowedList} 
            state = {state} 
            changeComplete = {changeComplete} 
            deleteTask ={deleteTask}
            />
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
