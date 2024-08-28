import React from 'react';
import 'animate.css';  // Import Animate.css for animations

const Result = ({ userChoice, computerChoice, result }) => {
  // Determine the animation class based on the result
  const animationClass = result.includes('Win') 
    ? 'animate__animated animate__bounceIn' 
    : result.includes('Draw') 
    ? 'animate__animated animate__flash' 
    : 'animate__animated animate__shakeX';

  return (
    <div style={styles.container}>
      <h2 style={styles.resultText}>You chose: {userChoice}</h2>
      <h2 style={styles.resultText}>Computer chose: {computerChoice}</h2>
      <h2 className={animationClass} style={styles.resultText}>{result}</h2>
      {/* Show the congratulations message only when the user wins */}
      {result === 'You Win! 🎉' && (
        <div className="animate__animated animate__tada" style={styles.congrats}>
          🎉 Congratulations! You Win! 🎉
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
  },
  resultText: {
    fontSize: '1.5rem',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  congrats: {
    fontSize: '2rem',
    color: '#fff',
    marginTop: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
  }
};

export default Result;
