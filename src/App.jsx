import TaskForm from "./components/TaskForm";
import TasksList from "./components/TaskList";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [input, setInput] = useState("");

  const [newTask, setNewTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() == "") {
      let errMjs = document.querySelector(".errorMsj-container");

      errMjs.innerHTML += `<p class="errorMsj text-2xl text-center bg-slate-800 text-white p-5 px-10 opacity-50 rounded-md mt-6 z-50 font-serif shadow-gray-600 shadow-xl"
        >You must add at least one task plis</p>`;

      setTimeout(() => {
        document.querySelector(".errorMsj").remove();
      }, 1500);
    } else {
      setNewTask([
        ...newTask,
        {
          id: newTask.length,
          task: input,
          completed: false,
        },
      ]);

      setInput("");
      document.querySelector(".formSection-input").value = "";
    }
  };

  return (
    <main className="bg-gray-300 h-screen box-border pepito">
      <AppContext.Provider
        value={{ handleSubmit, input, setInput, newTask, setNewTask }}
      >
        <TaskForm />
        <TasksList />
      </AppContext.Provider>
      <a
        rel="noreferrer"
        className="absolute bottom-3 font-bold text-gray-500 drop-shadow-sm right-5 hover:text-violet-600 ease-out text-lg"
        href="https://github.com/SebaPerez90"
        target="_blank"
      >
        Sebastian Perez © 2023 | do it with 💜
      </a>
    </main>
  );
}

export default App;
