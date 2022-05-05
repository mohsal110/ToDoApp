import React,{useState} from 'react'
import './AddTaskForm.css'
const AddTaskForm = ({addTask}) => {
  const [value,setValue]=useState('')
  const handleChange = (event) =>{
    if(event) {
      event.preventDefault();
    }
    setValue(event.target.value)
  }

  const handleSumbit = (event) => {
    if(event) {
      event.preventDefault();
    }
    if(!value || value===""){
      return;
    }
    addTask(value)
  }
  return (
    <div className='AddTaskForm'>
        <form  onSubmit={(event)=>handleSumbit(event)}className='form'>
          <input onChange={handleChange} type="text" placeholder='what should be done?'></input>
          <button  type="submit">Add</button>
        </form>
      </div>
  )
}

export default AddTaskForm