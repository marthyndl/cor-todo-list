import React from 'react';
import Items from '../Items';
import './List.scss';

const List = ({ tasks, saveTaskDataCallback }) => {
    const handleRemoveTask = (idx) => {
        let nextTasksData = tasks.slice();
        delete nextTasksData[idx];
        saveTaskDataCallback(nextTasksData);
    };

    return (
        <div>
            {tasks.map( task => (
                <Items key={task.id} task={task} handleRemoveTask={handleRemoveTask} />
            ))}
        </div>
    )
}

export default List
