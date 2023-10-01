'use client';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import useChess from '@/hooks/useChess';

import { Chessboard } from 'react-chessboard';

const RandomPage = () => {
  const { game, moves, makeRandomMove, resetGame } = useChess();

  const startGame = () => {
    resetGame();
    makeRandomMove();
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
