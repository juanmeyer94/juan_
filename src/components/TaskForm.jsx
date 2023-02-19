import { useState } from "react";
import { taskContext } from "../context/TaskContext";
import { useContext } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask}= useContext(taskContext)

  
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4 ">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2"
        type=""
        placeholder=" Escribe su texto aqui"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea className="bg-slate-300 p-3 w-full mb-2"
        placeholder="escriba la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300">Guardar</button>
    </form>
    </div>
  );
}
