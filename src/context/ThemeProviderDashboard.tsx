'use client';
import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { theme } from './MaterialThemeProvider';
import Sidebar from '@/components/Global/Sidebar';
import ThemeToggle from '@/components/Global/ThemeToggle';

export function ThemeProviderDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark] = useDarkMode();
  const [sidebarFixed, setSidebarFixed] = useState(false);

  const themeMui = dark ? theme.lightTheme : theme.darkTheme;
  return (
    <div
      className="flex w-full h-screen overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: themeMui.palette.background.default,
        color: themeMui.palette.text.primary,
      }}
    >
      <Sidebar fixed={sidebarFixed} setFixed={setSidebarFixed} />

      <div
        className={`flex flex-col flex-1 transition-all duration-300  py-2 ${
          sidebarFixed ? 'ml-[1rem]' : 'ml-[5rem]'
        }`}
      >
        {/* Header fixo */}
        <header className="h-20 border flex items-center px-4 shrink-0">
          NavBar
          <div className="flex-1" />
          {/* <button
            className={`bg-[${themeMui.palette.background.default}] p-2 rounded 
            text-${themeMui.palette.text.primary}`}
            onClick={toggleTheme}
            type="button"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button> */}
          <ThemeToggle />
        </header>

        {/* Conteúdo com rolagem */}
        <div className="flex-1 overflow-y-auto py-4">{children}</div>

        {/* Footer fixo */}
        <footer className="h-20 border flex items-center justify-center shrink-0">
          Create 2025
        </footer>
      </div>
    </div>
  );
}
