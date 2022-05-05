import React from 'react'
import {TaskItem} from '../'
import './TaskList.css'
const TaskList = ({tasksList , deleteTask , handleChengeStatus}) => {
  return (
    <div className='TaskList'>
        <ul>
          <li> 
            {tasksList.map( (task) =><TaskItem key={`task-${task.id}`} task={task}  deleteTask={deleteTask} handleChengeStatus={handleChengeStatus}/>)}
          </li>
        </ul>
      </div>
  )
}

export default TaskList