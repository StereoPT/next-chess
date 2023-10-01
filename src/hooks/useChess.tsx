import { useState } from 'react';
import { Chess, Move, ShortMove, Square } from 'chess.js';
import { evaluateBoard } from '@/helpers/chess';

type useChessType = {
  type: 'random' | 'computer';
};

const useChess = ({ type }: useChessType) => {
  const [game, setGame] = useState(new Chess());
  const [playing, setPlaying] = useState(false);
  const [moves, setMoves] = useState<Move[]>([]);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  const getComputerType = () => {
    if (type === 'random') return makeRandomMove;
    return calculateBestMove;
  };

  const makeMove = (move: string | ShortMove) => {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);

    if (result) {
      setMoves((prevMoves) => [result, ...prevMoves]);
      setGame(gameCopy);
    }

    return result;
  };

  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length <= 0) return;

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeMove(possibleMoves[randomIndex]);
  };

  const calculateBestMove = () => {
    const turnMoves = game.moves();
    let bestMove = null;
    let bestValue = -Infinity;

    for (const move of turnMoves) {
      game.move(move);
      const boardValue = -evaluateBoard(game.board());
      game.undo();

      if (boardValue > bestValue) {
        bestValue = boardValue;
        bestMove = move;
      }
    }

    if (bestMove === null) return;
    makeMove(bestMove);
  };

  const onPieceDrop = (sourceSquare: Square, targetSquare: Square) => {
    if (!playing) return false;

    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) return false;

    const newTimeout = setTimeout(getComputerType(), 200);
    setCurrentTimeout(newTimeout);
    return true;
  };

  const resetGame = () => {
    const gameCopy = { ...game };
    gameCopy.reset();
    setGame(gameCopy);

    setMoves([]);

    if (currentTimeout) clearTimeout(currentTimeout);
    setPlaying(false);
  };

  return {
    game,
    playing,
    setPlaying,
    moves,
    onPieceDrop,
    resetGame,
  };
};

export default useChess;
