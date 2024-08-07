import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  
  return (
    <div className="bg-gray-800 text-white rounded-md p-4">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 capitalize ">{task.description}</p>
      <button className="bg-red-400 p-2 py-2 rounded-md mt-4 hover:bg-red-300" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
