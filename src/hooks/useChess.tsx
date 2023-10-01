import { useState } from 'react';
import { Chess, Move } from 'chess.js';

const useChess = () => {
  const [game, setGame] = useState(new Chess());
  const [moves, setMoves] = useState<Move[]>([]);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  const makeMove = (move: string) => {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);

    return result;
  };

  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length <= 0) return;

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const move = makeMove(possibleMoves[randomIndex]);

    if (move == null) return false;
    setMoves((prevMoves) => [move, ...prevMoves]);

    const newTimeout = setTimeout(makeRandomMove, 500);
    setCurrentTimeout(newTimeout);
  };

  const resetGame = () => {
    const gameCopy = { ...game };
    gameCopy.reset();
    setGame(gameCopy);

    setMoves([]);

    if (currentTimeout) clearTimeout(currentTimeout);
  };

  return {
    game,
    moves,
    makeRandomMove,
    resetGame,
  };
};

export default useChess;
