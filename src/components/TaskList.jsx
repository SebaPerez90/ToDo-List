import React, { useContext } from 'react'
import { AppContext } from '../App'

const TasksList = () => {

  const { newTask, setNewTask } = useContext(AppContext)

  const deleteTask = (taskID) => {
    setNewTask(newTask.filter(task => task.id !== taskID))
  }
  
  return (
    <div className='grid gap-y-7 grid-cols-2 mt-8 justify-items-center'>
      {newTask.map((task) => {
        return (
          <div 
            className='flex bg-violet-600 p-4
             justify-between content-center w-80 rounded-full font-mono hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-2 ease-in duration-200 '
            id={task.id}
            key={task.id}>
            <p className='text-white pl-4 font-bold capitalize'>{task.task}</p>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </div>
        )
      })}
    </div>
  )
}

export default TasksList

