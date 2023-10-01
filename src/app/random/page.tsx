'use client';
import useChess from '@/hooks/useChess';

import { Chessboard } from 'react-chessboard';
import Controls from '@/components/Controls/Controls';
import MoveList from '@/components/MoveList/MoveList';

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
          <Controls startGame={startGame} resetGame={resetGame} />
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <MoveList moves={moves} />
      </div>
    </div>
  );
};

export default RandomPage;
