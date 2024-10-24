import { ChevronRight, ChevronsRightIcon } from "lucide-react";

function Tasks(props) {
    return(
        //Coloca espaçmento vertical entre os itens
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
            {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button
                    onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}
>

                    {task.title}
                </button>
               <button className="bg-slate-400 p-2 rounded-md text-white">
               <ChevronRight />
               </button>
            </li>
            ))}
        </ul>
    );
}

//Aqui estou falando pro React que a cada tarefa que recebo ou seja props.tasks você vai renderizar um parágrafo

export default Tasks;



