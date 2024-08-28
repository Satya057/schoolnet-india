import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div style={styles.container}>
      <div style={styles.scoreSection}>
        <h2 style={styles.header}>User</h2>
        <p style={styles.scoreText}>Wins: {score.user.wins}</p>
        <p style={styles.scoreText}>Losses: {score.user.losses}</p>
        <p style={styles.scoreText}>Draws: {score.user.draws}</p>
      </div>
      <div style={styles.scoreSection}>
        <h2 style={styles.header}>Computer</h2>
        <p style={styles.scoreText}>Wins: {score.computer.wins}</p>
        <p style={styles.scoreText}>Losses: {score.computer.losses}</p>
        <p style={styles.scoreText}>Draws: {score.computer.draws}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: '10px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    bottom: 0,
  },
  scoreSection: {
    textAlign: 'center',
  },
  header: {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '10px',
  },
  scoreText: {
    fontSize: '1.2rem',
    color: '#fff',
    marginBottom: '5px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  }
};

export default Scoreboard;
