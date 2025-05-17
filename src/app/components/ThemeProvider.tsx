'use client';
import React from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useDarkMode } from '../hooks/useDarkMode';
import { theme } from '@/app/components/MaterialThemeProvider';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, toggle] = useDarkMode();

  const themeMui = dark ? theme.lightTheme : theme.darkTheme;

  return (
    // <MuiThemeProvider theme={theme}>
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: themeMui.palette.background.default,
        color: themeMui.palette.text.primary,
      }}
    >
      <header className="p-4">
        <button onClick={toggle} className="cursor-pointer">
          {dark ? '☀️' : '🌙'}
        </button>
      </header>

      {/* O section vai ocupar o espaço restante e centralizar o conteúdo */}
      <section className="flex-grow flex items-cente justify-center px-4">
        {children}
      </section>

      <footer className="p-4 text-center">
        {/* Seu footer aqui */}
        Create 2025
      </footer>
    </div>
    // </MuiThemeProvider>
  );
}
