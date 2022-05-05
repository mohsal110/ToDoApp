import React from 'react'
import './TaskItem.css'
import { MdDelete } from "react-icons/md";

const TaskItem = ({task , deleteTask ,handleChengeStatus}) => {


  return (
    <div className='TaskItem '>
        <input type="checkbox" checked = {task.status} onChange={()=>handleChengeStatus(task.id)}></input>
        <h2>{task.title}</h2>
        <button onClick={()=>{deleteTask(task.id)}}><MdDelete /></button>
    </div>
  )
}

export default TaskItem