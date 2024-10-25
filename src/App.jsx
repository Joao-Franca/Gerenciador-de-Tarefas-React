import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import {v4} from 'uuid'   //Biblioteca ára gerar ID aleatoriamente 

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

  function onAddTaskSubmit (title, description){
    const newTask = {
      id: v4(),    //Ou seja o ID vai ser único pois sempre vai acrescentar mais um
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]) // os tres pontos serve pra colocar tudo que esta la dentro do tasks
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;

