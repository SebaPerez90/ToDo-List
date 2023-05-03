import './App.css'
import TaskForm from './components/TaskForm'
import TasksList from './components/TaskList';
import React, { createContext, useState } from "react";

export const AppContext = createContext(null)

function App() {

  const [input, setInput] = useState('');

  const [newTask, setNewTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.trim() == '') {
      let errMjs = document.querySelector('.errorMsj-container')

      errMjs.innerHTML += `<p class="errorMsj">You must add at least one task plis</p>`;
      setTimeout(() => {
        document.querySelector('.errorMsj').remove()
      }, 1500);

    } else {

      setNewTask([...newTask, {
        id: newTask.length,
        task: input,
        completed: false,
      }])

      setInput('')
      document.querySelector('.formSection-input').value = ''
    }
  };


  return (

    <AppContext.Provider value={{ handleSubmit, input, setInput, newTask, setNewTask }} >
      <TaskForm/>
      <TasksList />
    </AppContext.Provider>
  )
}

export default App
