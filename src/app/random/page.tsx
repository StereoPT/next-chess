'use client';
import { useState } from 'react';

import { Chess, Move } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
    <div className="flex p-4 mt-8">
      <div className="flex justify-center items-center w-1/2">
        <div className="w-[450px]">
          <Chessboard
            id="RandomChessBoard"
            position={game.fen()}
            customBoardStyle={{
              borderRadius: '8px',
            }}
          />
          <div className="flex gap-4 mt-4">
            <Button onClick={() => startGame()}>Start Game</Button>
            <Button onClick={() => resetGame()}>Reset Game</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <ul className="max-h-[450px] h-[450px] w-[450px] overflow-scroll divide-y">
          {moves?.map((move, index) => {
            return (
              <li className="flex justify-between gap-x-6 py-5" key={index}>
                <div className="flex min-w-0 gap-x-4">
                  <Image
                    className="flex-none rounded-full"
                    src={`assets/${move.color}_${move.piece}.svg`}
                    alt="Chess Piece"
                    width={45}
                    height={45}
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {move.color === 'b' ? 'Black' : 'White'} Move
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      From: {move.from} | To: {move.to}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RandomPage;
