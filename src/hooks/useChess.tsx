import { useState } from 'react';
import { Chess, Move, Square } from 'chess.js';
import { Piece } from 'react-chessboard/dist/chessboard/types';

const useChess = () => {
  const [game, setGame] = useState(new Chess());
  const [playing, setPlaying] = useState(false);
  const [moves, setMoves] = useState<Move[]>([]);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  const makeMove = (move: string) => {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);

    return result;
  };

  const makeRandomMove = () => {
    if (!playing) return;

    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length <= 0) return;

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const move = makeMove(possibleMoves[randomIndex]);

    if (move == null) return false;
    setMoves((prevMoves) => [move, ...prevMoves]);
  };

  const onPieceDrop = (
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece
  ) => {
    if (!playing) return false;

    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });
    setGame(gameCopy);

    if (move === null) return false;
    setMoves((prevMoves) => [move, ...prevMoves]);

    const newTimeout = setTimeout(makeRandomMove, 200);
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
