import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [score, setScore] = useState({
    user: { wins: 0, losses: 0, draws: 0 },
    computer: { wins: 0, losses: 0, draws: 0 }
  });
  const [resetGameFlag, setResetGameFlag] = useState(false); // Add this state to handle reset

  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      setScore(JSON.parse(storedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  const resetGame = () => {
    setScore({
      user: { wins: 0, losses: 0, draws: 0 },
      computer: { wins: 0, losses: 0, draws: 0 }
    });
    localStorage.removeItem('score');
    setResetGameFlag(true); // Set flag to reset game
  };

  return (
    <div style={styles.container}>
      <div style={styles.gameContainer}>
        <h1 style={styles.title}>Rock, Paper, Scissors</h1>
        <Game setScore={setScore} resetGameFlag={resetGameFlag} setResetGameFlag={setResetGameFlag} /> {/* Pass reset props */}
        <button onClick={resetGame} style={styles.resetButton}>Restart Game</button>
      </div>
      <Scoreboard score={score} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#fff',
    marginBottom: '20px',
  },
  resetButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#555',
    }
  }
};

export default App;
