import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = useState(""); // O valor que coloco nesse State é o valor do input se eu colocar 123 lá esse vai ser o valor do input
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="Digite o título da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="text"
                placeholder="Digite a descrição da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    //Verificar se título e desgrição estáo preenchidos
                    if (!title.trim() || !description.trim()  ){                // .trim() serve para tirar espaços em branco
                        return alert("Preencha o título e a descrição da tarefa.")
                    }
                    
                    onAddTaskSubmit(title, description)
                    setTitle("");
                    setDescription("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md"
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTasks;
