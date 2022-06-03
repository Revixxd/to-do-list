import {task, setTask, allTasks} from "../../../src/App"



export function addTask(e){
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
      setAllTasks([...allTasks].concat(newTask))
      
      //clear passed task
      setTask("")
      
    }
    
}

export function changeComplete(id) {
    let updatedList =[...allTasks].map((element)=>{
      if(element.id === id){
        element.completed = !element.completed
      }
      return element;
    })
    setAllTasks(updatedList);
}