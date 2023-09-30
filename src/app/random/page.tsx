'use client';
import { Chessboard } from 'react-chessboard';

const RandomPage = () => {
  return (
    <div className="w-[450px]">
      <Chessboard
        id="RandomChessBoard"
        customBoardStyle={{
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default RandomPage;
