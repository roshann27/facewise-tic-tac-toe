import React from 'react';
import Board from './Board';
import './styles/tic-tac-toe.css';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;