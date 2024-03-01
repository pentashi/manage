import React, { useState, useEffect } from 'react';
import './Stopwatch.css';
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);
  const [countdownTime, setCountdownTime] = useState(300); // 5 minutes countdown

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
    setLapTimes([]);
  };

  const recordLapTime = () => {
    setLapTimes([...lapTimes, time]);
  };

  const renderLapTimes = () => {
    return lapTimes.map((lapTime, index) => (
      <p key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</p>
    ));
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
  };

  const handleCountdownChange = (event) => {
    setCountdownTime(parseInt(event.target.value, 10));
  };

  const startCountdown = () => {
    if (!isRunning && countdownTime > 0) {
      setIsRunning(true);
      setTime(countdownTime * 1000);
    }
  };

  return (
    <div className="stopwatch-container">
      <h2 className="app-heading">Stopwatch by Achapi Pentashi</h2>
      <div className="stopwatch">
        <p>{formatTime(time)}</p>
        <div className="buttons">
          <button className="start-btn" onClick={startStopwatch}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button className="reset-btn" onClick={resetStopwatch}>
            Reset
          </button>
          <button className="start-btn" onClick={recordLapTime} disabled={!isRunning}>
            Lap
          </button>
        </div>
      </div>
      {lapTimes.length > 0 && (
        <div>
          <h3>Lap Times</h3>
          {renderLapTimes()}
        </div>
      )}
      <div>
        <h3>Countdown Timer</h3>
        <input
          type="number"
          value={countdownTime}
          onChange={handleCountdownChange}
          disabled={isRunning}
        />
        <button className="start-btn" onClick={startCountdown} disabled={isRunning}>
          Start Countdown
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
