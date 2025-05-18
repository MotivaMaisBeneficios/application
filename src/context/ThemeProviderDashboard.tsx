'use client';
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { ToastContainer } from 'react-toastify';
import { theme } from './MaterialThemeProvider';

export function ThemeProviderDashboard({ children }: { children: React.ReactNode }) {
  const [dark] = useDarkMode();

  const themeMui = dark ? theme.lightTheme : theme.darkTheme;

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: themeMui.palette.background.default,
        color: themeMui.palette.text.primary,
      }}
    >
      <header className="p-4"></header>

      {/* O section vai ocupar o espaço restante e centralizar o conteúdo */}
      <section className="flex-grow flex items-cente justify-center px-4">
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
      </section>

      <footer className="p-4 text-center">
        {/* Seu footer aqui */}
        Create 2025
      </footer>
    </div>
  );
}
