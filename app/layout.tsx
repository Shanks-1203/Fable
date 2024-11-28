import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fable - Write Your Imagination",
  description: "Write your stories, poems, micro-tales or anything on your mind",
  icons: {
    icon: '/logo.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-[4.8rem]`}
      >
        <Header/>
        <div className='bg-[#EEEDED] flex min-h-[92vh] text-black'>
          <div className='w-[17%]'>
            <Sidebar/>
          </div>
          <div className='p-[2rem] w-[83%]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
