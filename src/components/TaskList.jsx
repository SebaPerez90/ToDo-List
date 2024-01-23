import { useContext } from 'react'
import { AppContext } from '../App'

const TasksList = () => {

  const { newTask, setNewTask } = useContext(AppContext)

  const deleteTask = (taskID) => {
    setNewTask(newTask.filter(task => task.id !== taskID))
  };

  const completed = (id) => {
    setNewTask(newTask.map(task => {
      if (task.id === id) {
        task.completed = true
      }
      return task
    }));

  }

  return (
    <section className='grid gap-y-7 sm:grid-cols-1 mt-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>
      {newTask.map((task) => {
        return (
          <div
            className={task.completed == false ? `incomplete w-80 flex bg-gradient-to-r from-violet-700 to-violet-300 p-4 justify-between content-center rounded-full font-mono italic hover:shadow-lg hover:shadow-slate-500 hover:bg-violet-700 hover:-translate-y-2 ease-in duration-200 lg:w-96`
              : `completed flex bg-gray-400 p-4 justify-between content-center w-80 rounded-full font-serif lg:w-96`}
            id={task.id}
            key={task.id}>
            <p className={task.completed == false ? `text-white pl-4 font-bold capitalize` : `text-slate-300 pl-4 font-bold capitalize line-through	`}>{task.task}</p>
            <div>
              <button
                className='border-spacing-1.5 '
                onClick={() => deleteTask(task.id)}>❌</button>
              <button
                className={task.completed == false ? `check-btn ml-3 `
                 : `hidden `}
                onClick={() => completed(task.id)}>✔️</button>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default TasksList

