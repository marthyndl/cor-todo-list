import React from 'react';
import './Items.css'

const Items = ({ task }) => {
    const { name, description, priority, stateTask } = task;
    return (
        <div className="itemContainer">
            <div className="subContainerState">
                <span className="sectionState">Prioridad: {priority}</span>
                <span className="sectionState">Estado: {stateTask}</span>
            </div>
            <h3 className="itemTitle">Titulo: {name}</h3>
            <div className="subContainerDescription">
                <span className="subContainerDescriptionSpan">Descripción:</span>
                <div className="subContainerDescriptionDiv">{description}</div>
            </div>
        </div>
    )
}

export default Items;
