/* eslint-disable array-callback-return */
import React from 'react';
import Items from '../Items';
import './List.scss';

const List = ({ tasks, saveTaskDataCallback }) => {
    const handleRemoveTask = (idx) => {
        let nextTasksData = tasks.slice();
        delete nextTasksData[idx-1];
        saveTaskDataCallback(nextTasksData);
    };
    
    return (
        <div>
            {tasks.map( task => {
                if (task) {
                    return <Items key={task.id} task={task} handleRemoveTask={handleRemoveTask} />
                }
            }
            )}
        </div>
    )
}

export default List
