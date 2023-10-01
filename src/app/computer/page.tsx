'use client';
import useChess from '@/hooks/useChess';

import { Chessboard } from 'react-chessboard';
import Controls from '@/components/Controls/Controls';
import MoveList from '@/components/MoveList/MoveList';

const ComputerPage = () => {
  const { game, moves, playing, setPlaying, onPieceDrop, resetGame } = useChess(
    { type: 'computer' }
  );

  const startGame = () => {
    resetGame();
    setPlaying(true);
  };

  return (
    <div className="flex p-4 mt-8">
      <div className="flex justify-center items-center w-1/2">
        <div className="w-[450px]">
          {!playing && (
            <div className="absolute flex justify-center items-center w-[450px] h-[450px] z-10">
              <div className="text-3xl bg-gray-400 w-full text-center py-2">
                Not Playing
              </div>
            </div>
          )}
          <Chessboard
            id="RandomChessBoard"
            onPieceDrop={onPieceDrop}
            position={game.fen()}
            customBoardStyle={{
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
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

export default ComputerPage;
