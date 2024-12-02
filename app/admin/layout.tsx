import SideBar from './components/SideBar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className='lg:pt-28 md:pt-24 pt-20 flex'>
      <SideBar />
      {children}
    </main>
  );
}
