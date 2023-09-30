'use client';
import { useState } from 'react';

import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { Button } from '@/components/ui/button';

const RandomPage = () => {
  const [game, setGame] = useState(new Chess());
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
    const newTimeout = setTimeout(makeRandomMove, 500);
    setCurrentTimeout(newTimeout);
  };

  const startGame = () => {
    makeRandomMove();
  };

  const resetGame = () => {
    const gameCopy = { ...game };
    gameCopy.reset();
    setGame(gameCopy);

    clearTimeout(currentTimeout);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="w-[450px]">
        <Chessboard
          id="RandomChessBoard"
          position={game.fen()}
          customBoardStyle={{
            borderRadius: '8px',
          }}
        />
      </div>
      <div>
        <Button variant="outline" onClick={() => startGame()}>
          Start Game
        </Button>
        <Button variant="outline" onClick={() => resetGame()}>
          Reset Game
        </Button>
      </div>
    </div>
  );
};

export default RandomPage;
