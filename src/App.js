import React from "react";
import { useState } from "react";
import TaskCreate from './components/TaskCreate'
import TaskList from "./components/TaskList";
import './styles/stylelib.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title) => {

    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    if (title !== '') {
      const updatedTasks = [
        ...tasks,
        { id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, title: capitalizedTitle }
      ]
      setTasks(updatedTasks);
    }
    if (title === "alldone()" || title === "alldel()") {
      setTasks([]);
    }
  }

  const deleteTaskById = (id) => {
    const delUpdatedTasks = [
      ...tasks.filter((task) => {
        return task.id !== id;
      })
    ];

    setTasks(delUpdatedTasks);
  }

  const handleEditTask = (id, newtitle) => {
    console.log(newtitle);
  }

  return (
    <div className="app">
      <div className="task-list" >
        <TaskList tasks={tasks} onEditTask={handleEditTask} deleteTaskById={deleteTaskById} />
      </div>
      <h1 className="title">Niyoga</h1>
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
