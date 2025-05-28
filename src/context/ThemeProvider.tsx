'use client';
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { ToastContainer } from 'react-toastify';
import { theme } from './MaterialThemeProvider';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark] = useDarkMode();

  const themeMui = dark ? theme.lightTheme : theme.darkTheme;

  return (
    <div
      className="flex flex-col min-h-screen "
      style={{
        backgroundColor: themeMui.palette.background.default,
        color: themeMui.palette.text.primary,
      }}
    >
      <div className="flex-grow flex items-cente justify-center">
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
    </div>
  );
}
