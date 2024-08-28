import React from 'react';

const Choices = ({ handleChoice }) => {
  return (
    <div style={styles.container}>
      {['Rock', 'Paper', 'Scissors'].map(choice => (
        <button key={choice} onClick={() => handleChoice(choice)} style={styles.button}>
          {choice}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    margin: '20px 0',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
    border: '2px solid #333',
    borderRadius: '5px',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: '#fff',
    animation: 'bounce 0.3s ease',
    ':hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#f0f0f0',
    }
  }
};

export default Choices;
