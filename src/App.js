import React, { useState } from 'react';
import Logo from './Logo';
import List from './List';
import CreateTastk from './CreateTastk';
import FilterArray from './FilterArray';
import './App.scss';

const initialTask = [
  { 
    id: 1, 
    name: 'Diseñar banner', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    priority: 'Baja', 
    stateTask: 'En progreso' 
  },
  { 
    id: 2, 
    name: 'Desarrollar tooltip', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    priority: 'Media', 
    stateTask: 'En progreso' 
  },
];

function App() {
  const [tasks, setTask] = useState(initialTask);
  const [tasksFiltered, setTaskFiltered] = useState(initialTask);

  const saveTaskData = (taskData) => {
    setTask([...tasks, taskData]);
    setTaskFiltered([...tasks, taskData]);
  };

  const saveTaskFilterData = (filterArrayTask) => {
    setTaskFiltered(filterArrayTask);
  };

  if (!tasks) return <></>;
  return (
    <>
      <Logo />
      <div className="App">
        <CreateTastk 
          tasks={tasks} 
          saveTaskDataCallback={saveTaskData}
        />
        <FilterArray 
          initialTask={initialTask}
          tasks={tasks} 
          saveTaskDataCallback={saveTaskFilterData}
        />
        <List tasks={tasksFiltered} saveTaskDataCallback={saveTaskFilterData} />
      </div>
    </>
  );
}

export default App;
