import React, { useState, useEffect } from 'react';
import './popup.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    chrome.storage.sync.get(['tasks'], (result) => {
      if (result.tasks) {
        setTasks(result.tasks);
      }
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.set({ tasks });
  }, [tasks]);

  const addTask = () => {
    const task = prompt("Enter a task:");
    if (task) setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      alert("Time's up! Take a break.");
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="container">
      {/* <h1 className="text-center my-4">Pomodoro Timer</h1> */}
      <h1 className="animate__animated animate__fadeIn">Pomodoro Timer</h1>
      <div className="timer text-center my-4">
        <h2>{formatTime(timeLeft)}</h2>
        <button className="btn btn-primary mx-2" onClick={toggleTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-secondary mx-2" onClick={resetTimer}>Reset</button>
      </div>
      <div className="tasks">
        <h2>Tasks</h2>
        <ul className="list-group my-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </li>
          ))}
        </ul>
        <button className="btn btn-success" onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default App;
