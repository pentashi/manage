import React, { useState } from 'react';
import { FaTrash, FaArrowUp, FaArrowDown, FaCheck, FaBan } from 'react-icons/fa';
import './index.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, complete: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const moveTask = (index, direction) => {
    const updatedTasks = [...tasks];
    const movedTask = updatedTasks.splice(index, 1)[0];
    updatedTasks.splice(index + direction, 0, movedTask);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].complete = !updatedTasks[index].complete;
    setTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.complete);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo List by Achapi Pentashi</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={`todo-item ${task.complete ? 'complete' : ''}`}>
            <div>
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() => toggleComplete(index)}
              />
              {task.text}
            </div>
            <div className="action-icons">
              <FaArrowUp
                className="move-icon"
                onClick={() => moveTask(index, -1)}
                title="Move Up"
              />
              <FaArrowDown
                className="move-icon"
                onClick={() => moveTask(index, 1)}
                title="Move Down"
              />
              <FaCheck className="move-icon" onClick={() => toggleComplete(index)} title="Complete" />
              <FaTrash className="delete-icon" onClick={() => deleteTask(index)} title="Delete" />
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={clearCompleted} className="add-button">
          Clear Completed <FaBan style={{ marginLeft: '5px' }} />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
