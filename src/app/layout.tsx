import { Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body
        className="w-full max-w-screen-xl overflow-auto mx-auto"
        suppressHydrationWarning={true}
      >
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            {/* <div className="max-w-screen-xl mx-auto"> */}
            <Navbar />
            {/* </div> */}
          </header>
          <main className="w-full flex justify-center bg-neutral-50 min-h-full">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
