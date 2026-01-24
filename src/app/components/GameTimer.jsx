import React, { useState, useEffect } from 'react';

const GameTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    // Start the timer interval
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId); // Stop the timer if it reaches 0
          setIsRunning(false);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning]); // Depend on isRunning to restart effect when state changes

  // Function to format seconds into a display format (MM:SS)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    // Pad with zeros for a consistent MM:SS format
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ fontSize: '24px', fontWeight: 'bold', color: isRunning ? 'black' : 'red' }}>
      Time Remaining: {formatTime(seconds)}
      {!isRunning && <div>Game Over!</div>}
    </div>
  );
};

export default GameTimer;