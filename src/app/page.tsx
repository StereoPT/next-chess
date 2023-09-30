'use client';

import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Chessboard } from 'react-chessboard';

const Home = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Navbar className="mx-6" />
      <main className="flex justify-center items-center p-4">
        <div className="mt-12 w-[450px]">
          <Chessboard
            id="ChessBoard"
            customBoardStyle={{
              borderRadius: '8px',
            }}
          />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Home;
