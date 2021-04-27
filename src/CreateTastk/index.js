import React, { useState } from 'react';
import './CreateTask.scss';

const CreateTask = ({ tasks, saveTaskDataCallback }) => {
    const [newTask, setNewTask] = useState({
        id: 99,
        name: '', 
        description: '', 
        priority: '', 
        stateTask: ''
    });
    const { name, description, priority, stateTask } = newTask;
    
    const handleChange = (e) => {
        e.persist();
        const value = e.target.value;
        const inputType = e.target.name;
        setNewTask({
            ...newTask,
            [inputType]: value,
        });
    };

    const handleAdd = () => {
        const newTask1 = {
            id: tasks.length + 1,
            name: name, 
            description: description, 
            priority: priority, 
            stateTask: stateTask
        };
        saveTaskDataCallback(newTask1);  
    }
    
    return (
        <div className="createTask">
            <div className="createTask__header createTask__body" >
                <input 
                    name="name"
                    placeholder='Titulo' 
                    onChange={(e) => handleChange(e)}
                />
                <select
                    name="priority"
                    onChange={(e) => handleChange(e)}
                    value={priority}
                >
                    <option value="">Prioridad</option>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                </select>
                <select
                    name="stateTask"
                    onChange={(e) => handleChange(e)}
                    value={stateTask}
                >
                    <option value="">Estado</option>
                    <option value="Backlog">Backlog</option>
                    <option value="En progreso">En progreso</option>
                    <option value="Finalizado">Finalizado</option>
                </select>
            </div>
            <div className="createTask__body">
                <textarea
                    name="description"
                    placeholder='Descripción' 
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="createTask__body">
                <button
                    disabled={(name === '' || description === '' || priority === '' || stateTask === '') ? true : false}
                    onClick={handleAdd}
                >
                    Crear tarea
                </button>
            </div>
        </div>
    )
};

export default CreateTask;
