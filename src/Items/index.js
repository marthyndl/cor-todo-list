import React from 'react';
import './Items.scss';

const Items = ({ task }) => {
    const { name, description, priority, stateTask } = task;
    return (
        <div className="item">
            <div className="item__state">
                <span>Prioridad: {priority}</span>
                <span>Estado: {stateTask}</span>
            </div>
            <h3 className="item__title">Titulo: {name}</h3>
            <div className="item__description">
                <span>Descripción:</span>
                <div>{description}</div>
            </div>
        </div>
    )
}

export default Items;
