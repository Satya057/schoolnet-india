import React, { useState, useEffect } from 'react';
import Choices from './Choices';
import Result from './Result';

const Game = ({ setScore, resetGameFlag, setResetGameFlag }) => {  // Receive reset props
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (resetGameFlag) {
      // Reset choices and result
      setUserChoice(null);
      setComputerChoice(null);
      setResult('');
      setResetGameFlag(false); // Reset the flag
    }
  }, [resetGameFlag, setResetGameFlag]);

  const choices = ['Rock', 'Paper', 'Scissors'];

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'Draw';
    if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'User';
    }
    return 'Computer';
  };

  const handleChoice = (choice) => {
    const computer = getComputerChoice();
    const winner = determineWinner(choice, computer);
    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(winner === 'Draw' ? "It's a Draw!" : winner === 'User' ? 'You Win! 🎉' : 'Computer Wins! 💻');

    setScore(prevScore => {
      const newScore = { ...prevScore };
      if (winner === 'User') {
        newScore.user.wins += 1;
        newScore.computer.losses += 1;
      } else if (winner === 'Computer') {
        newScore.user.losses += 1;
        newScore.computer.wins += 1;
      } else {
        newScore.user.draws += 1;
        newScore.computer.draws += 1;
      }
      return newScore;
    });
  };

  return (
    <div>
      <Choices handleChoice={handleChoice} />
      {result && <Result userChoice={userChoice} computerChoice={computerChoice} result={result} />}
    </div>
  );
};

export default Game;
