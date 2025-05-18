'use client';

import Sidebar from '@/components/Global/Sidebar';
import { Geist, Geist_Mono } from 'next/font/google';
import { useState } from 'react';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarFixed, setSidebarFixed] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen w-full">
          <Sidebar fixed={sidebarFixed} setFixed={setSidebarFixed} />

          <div
            className={`flex flex-col flex-1 transition-all duration-300 p-2 ${
              sidebarFixed ? 'ml-[1rem]' : 'ml-[5rem]'
            }`}
          >
            <div className="border h-20">NavBar</div>
            <main className="flex-1 py-4">{children}</main>
            <div className="border h-20">Footer</div>
          </div>
        </div>
      </body>
    </html>
  );
}
