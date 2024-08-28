import React from 'react';

const ProgressIndicator = ({ timeLeft, isBreak, workTime, breakTime }) => {
  const totalTime = isBreak ? breakTime * 60 : workTime * 60;
  const percentage = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div style={styles.progressContainer}>
      <svg style={styles.svg} viewBox="0 0 36 36">
        <path
          style={styles.circleBackground}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          style={{
            ...styles.circleProgress,
            strokeDasharray: `${percentage}, 100`,
          }}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

const styles = {
  progressContainer: {
    width: '150px',
    height: '150px',
    margin: '20px 0',
  },
  svg: {
    transform: 'rotate(-90deg)',
  },
  circleBackground: {
    fill: 'none',
    stroke: '#eee',
    strokeWidth: '3.8',
  },
  circleProgress: {
    fill: 'none',
    stroke: '#ff6b6b',
    strokeWidth: '3.8',
    strokeLinecap: 'round',
    transition: 'stroke-dasharray 0.3s ease',
  },
};

export default ProgressIndicator;
