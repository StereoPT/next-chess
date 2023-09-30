import './globals.css';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Next-Chess',
  description: 'NextJS Chess Game',
};

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="flex justify-center items-center p-4 mt-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;