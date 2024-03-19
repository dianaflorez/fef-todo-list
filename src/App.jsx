import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RiDeleteBin2Line } from 'react-icons/ri';
import './App.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: uuidv4(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTaskText = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='card'>
      <h1 className='card-title'>Todo List</h1>
      <div className='custom_input'>
        <svg xmlns="http://www.w3.org/2000/svg" class="svg_icon bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
        <input
          className='input'
          placeholder='Escribir tarea'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => updateTaskText(task.id, e.target.value)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <button onClick={() => removeTask(task.id)}>
              <RiDeleteBin2Line />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
