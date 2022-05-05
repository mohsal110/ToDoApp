import React, { useState } from 'react'
import './FilterHeader.css'
const FilterHeader = ({tasks , updateFilter}) => {
  const [filter,setFilter]=useState('all')
  const handleFilter = (filterName) => {
    setFilter(filterName)
    updateFilter(filterName)
  }
  return (
    <div className='FilterHeader'>
        <div className='FilterHeader__countItems'> {tasks.length} items</div>
      <div className='FilterHeader__filters'>
        <ul>
          <li><button onClick={() => handleFilter("all")} className={filter==="all"?"active":""} >All</button></li>
          <li><button onClick={() => handleFilter("active")} className={filter==="active"?"active":""}>Active</button></li>
          <li><button onClick={() => handleFilter("completed")} className={filter==="completed"?"active":""}>Completed</button></li>
        </ul>
      </div>
    </div>
  )
}

export default FilterHeader