'use client';

import { Chessboard } from 'react-chessboard';

import Controls from '../Controls/Controls';
import MoveList from '../MoveList/MoveList';
import GameMessage from './GameMessage';

import useChess, { ChessType } from '@/hooks/useChess';

type ChessGameType = {
  id: string;
  type: ChessType;
};

const ChessGame = ({ id, type }: ChessGameType) => {
  const {
    game,
    moves,
    playing,
    depth,
    setDepth,
    onPieceDrop,
    startGame,
    resetGame,
  } = useChess(type);

  return (
    <div className="flex p-4 mt-8">
      <div className="flex justify-center w-1/2">
        <div className="w-[450px]">
          {!playing && <GameMessage message="Not Playing" />}
          <Chessboard
            id={id}
            onPieceDrop={onPieceDrop}
            position={game.fen()}
            customBoardStyle={{
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          />
          <Controls
            startGame={startGame}
            resetGame={resetGame}
            type={type}
            depth={depth}
            setDepth={setDepth}
          />
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <MoveList moves={moves} />
      </div>
    </div>
  );
};

export default ChessGame;
