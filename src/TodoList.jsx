import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { TaskItem } from './components/TaskItem';

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

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTaskText = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className='card'>

      <h1 className='card-title'>Todo List</h1>

      <div className='custom_input'>
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
          <TaskItem
            key = {task.id}
            task = {task}
            onToggle = {toggleTaskCompletion}
            onDelete = {removeTask}
            onTextChange = {updateTaskText}
          />
        ))}
      </ul>

    </div>
  );
}

export default TodoList;
