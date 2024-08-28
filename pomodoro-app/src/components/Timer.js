import React from 'react';

const Timer = ({ timeLeft, isBreak }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  };

  return (
    <div style={styles.timerContainer}>
      <h2 style={styles.timerLabel}>{isBreak ? 'Break Time' : 'Work Time'}</h2>
      <div style={styles.timeDisplay}>{formatTime(timeLeft)}</div>
    </div>
  );
};

const styles = {
  timerContainer: {
    marginBottom: '20px',
  },
  timerLabel: {
    fontSize: '1.5rem',
    color: '#333',
  },
  timeDisplay: {
    fontSize: '4rem',
    color: '#333',
  },
};

export default Timer;
