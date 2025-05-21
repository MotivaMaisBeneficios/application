'use client';
import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { ToastContainer } from 'react-toastify';
import { theme } from './MaterialThemeProvider';
import Sidebar from '@/components/Global/Sidebar';

export function ThemeProviderDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, toggleTheme] = useDarkMode();
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
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarFixed ? 'ml-[1rem]' : 'ml-[5rem]'
        }`}
      >
        {/* Header fixo */}
        <header className="h-20 border flex items-center px-4 shrink-0">
          NavBar
          <div className="flex-1" />
          <button
            className={`bg-[${themeMui.palette.background.default}] p-2 rounded 
            text-${themeMui.palette.text.primary}`}
            onClick={toggleTheme}
            type="button"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </header>

        {/* Conteúdo com rolagem */}
        <div className="flex-1 overflow-y-auto py-4">
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={!dark ? 'dark' : 'light'}
          />
        </div>

        {/* Footer fixo */}
        <footer className="h-20 border flex items-center justify-center shrink-0">
          Create 2025
        </footer>
      </div>
    </div>
  );
}
