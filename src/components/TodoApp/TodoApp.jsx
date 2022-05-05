import React , {useEffect, useState} from 'react'
import './TodoApp.css'
import { v4 as uuidv4 } from 'uuid';

import {AddTaskForm ,TaskList , FilterHeader} from '../'
const TodoApp = () => {
  const [ tasks , setTasks ] = useState([]);
  const [filter,setFilter]=useState('all');
  const [filteredTasks,setFilteredTasks]=useState([]);
  const [refresh,setRefresh]=useState(0);

  useEffect (()=>{

    let storedTasks=localStorage.getItem('tasks')
    console.log(storedTasks);
    if(storedTasks){
      storedTasks=JSON.parse(storedTasks)
    }
    else{
      storedTasks=[]
    }
    setTasks(storedTasks)

  },[])
  useEffect (()=>{

    if(filter==='all'){
      setFilteredTasks(tasks)
    }
    if(filter==='active'){
      const newActiveFilteredTasks = tasks.filter( (task) => !task.status );//if task.status was false
      setFilteredTasks(newActiveFilteredTasks ) 
    }
    if(filter==='completed'){
      const newActiveFilteredTasks = (tasks.filter( (task) => task.status )) //if task.status was true
      setFilteredTasks(newActiveFilteredTasks) //if task.status was true
    }
    
  },[filter,tasks,refresh])

  const addTask = (taskTitle) =>{
    
    let newTasks=[
      ...tasks,
      {
        id:uuidv4(),
        title:taskTitle,
        status:false,
      }
    ]
    console.log(newTasks)
    setTasks(newTasks)
    localStorage.setItem('tasks',JSON.stringify(newTasks))

  }

  const deleteTask = (taskID) =>{
  
    let newTaskList = tasks;
    delete newTaskList[tasks.findIndex((item)=>item.id===taskID)]
    newTaskList = newTaskList.filter(item => item);
    setTasks(newTaskList)
    localStorage.setItem('tasks',JSON.stringify(newTaskList))

    
  }
  const handleChengeStatus = (taskID) =>{
  
    let newTaskList = tasks;
    const taskIndex=tasks.findIndex((item)=>item.id===taskID)
    newTaskList[taskIndex].status = !newTaskList[taskIndex].status;
    setTasks(newTaskList)
    localStorage.setItem('tasks',JSON.stringify(newTaskList))
    setRefresh(refresh+1)
    
  }

  const updateFilter = (filterName)=>{

    setFilter(filterName)
  }
  return (
    <div className='TodoApp'>
      <AddTaskForm addTask={addTask} />
      <FilterHeader tasks={filteredTasks} updateFilter={updateFilter} />
      <TaskList tasksList={filteredTasks} deleteTask={deleteTask} handleChengeStatus={handleChengeStatus} />
    </div>
  )
}

export default TodoApp