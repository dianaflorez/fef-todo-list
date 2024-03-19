import { RiDeleteBin2Line } from 'react-icons/ri';

export function TaskItem ({ task, onToggle, onTextChange, onDelete }){
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <input
        type = "text"
        value = {task.text}
        onChange = {(e) => onTextChange(task.id, e.target.value)}
        style = {{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
      <button onClick={() => onDelete(task.id)}>
        <RiDeleteBin2Line />
      </button>
    </li>
  );
}