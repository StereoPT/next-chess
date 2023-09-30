'use client';

import Navbar from '@/components/Navbar/Navbar';
import { Chessboard } from 'react-chessboard';

const Home = () => {
  return (
    <div className="mt-12 w-[450px]">
      <Chessboard
        id="ChessBoard"
        customBoardStyle={{
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default Home;
