import React, { useState, useEffect } from 'react';
import './Stopwatch.css'; // Make sure to create a CSS file for styling

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const minutes = Math.floor(time / (60 * 100));
    const seconds = Math.floor((time / 100) % 60);
    const milliseconds = time % 100;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(
      milliseconds
    ).padStart(2, '0')}`;
  };

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="stopwatch-container">
      <h1 className="app-heading">Stopwatch App by Achapi Pentashi</h1>
      <div className="stopwatch">
        <p>{formatTime()}</p>
        <div className="buttons">
          <button className="start-btn" onClick={handleStart} disabled={running}>
            Start
          </button>
          <button className="stop-btn" onClick={handleStop} disabled={!running}>
            Stop
          </button>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
