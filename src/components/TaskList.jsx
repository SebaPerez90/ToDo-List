import React, { useContext } from "react"
import { AppContext } from "../App"

const TasksList = () => {

  const { newTask, setNewTask } = useContext(AppContext)
  
  const deleteTask = (taskID) => {
    setNewTask(newTask.filter(task => task.id !== taskID))
  }
  return (
    <div>
      {newTask.map((task) => {
        return (
          <div
            id={task.id}
            key={task.id}>
            <h2>{task.task}</h2>
            <button onClick={() => deleteTask(task.id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default TasksList

