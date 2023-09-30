'use client';
import { Button } from '@/components/ui/button';
import { Chessboard } from 'react-chessboard';

const RandomPage = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="w-[450px]">
        <Chessboard
          id="RandomChessBoard"
          customBoardStyle={{
            borderRadius: '8px',
          }}
        />
      </div>
      <div>
        <Button variant="outline">Start Game</Button>
      </div>
    </div>
  );
};

export default RandomPage;
