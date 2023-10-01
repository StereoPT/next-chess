'use client';
import { useState } from 'react';

import { Chess, Move } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { Button } from '@/components/ui/button';

const RandomPage = () => {
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

  const startGame = () => {
    resetGame();

    makeRandomMove();
  };

  const resetGame = () => {
    const gameCopy = { ...game };
    gameCopy.reset();
    setGame(gameCopy);

    setMoves([]);

    if (currentTimeout) clearTimeout(currentTimeout);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12 p-4 mt-8">
      <div className="w-[450px]">
        <Chessboard
          id="RandomChessBoard"
          position={game.fen()}
          customBoardStyle={{
            borderRadius: '8px',
          }}
        />
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => startGame()}>
          Start Game
        </Button>
        <Button variant="outline" onClick={() => resetGame()}>
          Reset Game
        </Button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-2xl font-bold">Game Log</h2>
        {moves?.map((move) => {
          return (
            <p key={move.san}>
              {move.color} Turn - Moved: {move.piece} | From: {move.from} | To:{' '}
              {move.to}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RandomPage;
