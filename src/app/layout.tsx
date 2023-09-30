import './globals.css';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
};

export default Layout;
