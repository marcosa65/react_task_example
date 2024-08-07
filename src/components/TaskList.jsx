import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas disponibles</h1>;
  }

  return (
    <div className={"grid grid-cols-4 gap-2 p-2"}>
      {tasks.map((obj) => (
        <TaskCard key={obj.id} task={obj} />
      ))}
    </div>
  );
}

export default TaskList;
