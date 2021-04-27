import React from 'react';
import './FilterArray.css';

const FilterArray = ({ tasks, saveTaskDataCallback, initialTask }) => {
    const orderByType = (e) => {
        e.persist();
        const value = e.target.value;
        const inputType = e.target.name;
        let result = [];
        if (value !== '') {
            if (inputType === 'priority') {
                result = tasks.filter(el => el.priority === value);
            } 
            if (inputType === 'stateTask') {
                result = tasks.filter(el => el.stateTask === value);
            }
        }
        if (value === 'Todos') {
            result = tasks;
        }
        saveTaskDataCallback(result);
    };

    return (
        <div>
            <h3 className="filterTitle">Filtrar por:</h3>
            <div className="filterSubContainer">
                <div className="filterSection">
                    <p>Prioridad</p> 
                    <select
                    name="priority"
                    onChange={(e) => orderByType(e)}
                    value={tasks.priority}
                    >
                    <option value="">Prioridad</option>
                    <option value="Todos">Todos</option>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                    </select>
                </div>
                <div className="filterSection">
                    <p>Estado</p>
                    <select
                    name="stateTask"
                    onChange={(e) => orderByType(e)}
                    value={tasks.stateTask}
                    >
                    <option value="">Estado</option>
                    <option value="Todos">Todos</option>
                    <option value="Backlog">Backlog</option>
                    <option value="En progreso">En progreso</option>
                    <option value="Finalizado">Finalizado</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterArray;
