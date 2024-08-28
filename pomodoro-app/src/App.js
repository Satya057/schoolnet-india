import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import ProgressIndicator from './components/ProgressIndicator';

const App = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default to 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (!isBreak) {
        setIsBreak(true);
        setTimeLeft(breakTime * 60);
      } else {
        setIsBreak(false);
        setTimeLeft(workTime * 60);
      }
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak, workTime, breakTime]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(workTime * 60);
  };

  const handleWorkTimeChange = (event) => {
    const newWorkTime = parseInt(event.target.value);
    setWorkTime(newWorkTime);
    if (!isActive) {
      setTimeLeft(newWorkTime * 60);
    }
  };

  const handleBreakTimeChange = (event) => {
    const newBreakTime = parseInt(event.target.value);
    setBreakTime(newBreakTime);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pomodoro Timer</h1>
      <Timer timeLeft={timeLeft} isBreak={isBreak} />
      <ProgressIndicator timeLeft={timeLeft} isBreak={isBreak} workTime={workTime} breakTime={breakTime} />
      <Controls 
        isActive={isActive} 
        toggleTimer={toggleTimer} 
        resetTimer={resetTimer} 
        workTime={workTime}
        breakTime={breakTime}
        handleWorkTimeChange={handleWorkTimeChange}
        handleBreakTimeChange={handleBreakTimeChange}
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
};

export default App;
