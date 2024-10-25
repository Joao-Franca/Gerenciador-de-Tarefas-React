import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false, // Vai servir para marcar como concluído
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Para se tornar fluente.",
      isCompleted: false, // Vai servir para marcar como concluído
    },
    {
      id: 3,
      title: "Estudar alemão",
      description: "Para se tornar fluente.",
      isCompleted: false, // Vai servir para marcar como concluído
    },
  ]);

  function onTaskClick (taskId) {
    const newTasks = tasks.map(task => {
      //Preciso atualizar essa tarefa
      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }

      //Não preciso atualizar essa tarefa
      return task;
    })
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    // Filtra a lista de tarefas, removendo a tarefa com o ID correspondente
    const newTasks = tasks.filter(task => task.id !== taskId);
    // Atualiza o estado com a nova lista de tarefas
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTasks />
        <Tasks tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;

