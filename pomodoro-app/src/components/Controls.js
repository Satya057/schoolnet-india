import React from 'react';

const Controls = ({ isActive, toggleTimer, resetTimer, workTime, breakTime, handleWorkTimeChange, handleBreakTimeChange }) => {
  return (
    <div style={styles.controlsContainer}>
      <button onClick={toggleTimer} style={styles.button}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} style={styles.button}>
        Reset
      </button>
      <div style={styles.timeAdjustContainer}>
        <div style={styles.timeAdjust}>
          <label style={styles.label}>Work Time: </label>
          <input type="number" value={workTime} onChange={handleWorkTimeChange} style={styles.input} />
        </div>
        <div style={styles.timeAdjust}>
          <label style={styles.label}>Break Time: </label>
          <input type="number" value={breakTime} onChange={handleBreakTimeChange} style={styles.input} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  controlsContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  timeAdjustContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  timeAdjust: {
    margin: '0 15px',
  },
  label: {
    fontSize: '1.2rem',
    color: '#333',
  },
  input: {
    fontSize: '1.2rem',
    width: '50px',
    textAlign: 'center',
    marginLeft: '5px',
  },
};

export default Controls;
