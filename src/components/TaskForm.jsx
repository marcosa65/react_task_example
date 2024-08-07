import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setDesc(event.target.value);
  };

  //##### Handle Submit event #####
  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({ title: Title, description: Desc });
    setTitle("");
    setDesc("");
  };

  return (
    <form className="bg-slate-900 p-10 mb-4 rounded-md" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-white mb-2">Crea tus tareas </h1>
      <input
        id="20"
        placeholder="Escribe tu tarea"
        onChange={handleInputChange}
        value={Title}
        autoFocus={true}
        className="bg-slate-300 p-3 w-full md-2"
      />
      <textarea
        placeholder="inserte una descripcion"
        onChange={handleTextChange}
        value={Desc}
        className="bg-slate-300 p-3 w-full md-2 mt-4"
      />
      <button
        className="bg-indigo-500 p-2"
      >Guardar
      </button>
    </form>
  );
}

export default TaskForm;
