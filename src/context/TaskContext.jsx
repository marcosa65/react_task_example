import { createContext, useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  var x = (PropTypes.number = 20);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(obj) {
    const newElement = {
      id: tasks.length,
      title: obj.title,
      description: obj.description,
    };
    setTasks([...tasks, newElement]);
    console.log(tasks);
  }
  function deleteTask(taskID) {
    var newArr = tasks.filter((task) => task.id !== taskID);
    setTasks(newArr);
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
