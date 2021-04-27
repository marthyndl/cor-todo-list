import React from 'react';
import Items from '../Items';
import './List.scss';

const List = ({ tasks }) => {
    return (
        <div>
            {tasks.map( task => (
                <Items key={task.id} task={task} />
            ))}
        </div>
    )
}

export default List
