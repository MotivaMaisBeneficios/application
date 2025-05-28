'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setDark(localStorage.getItem('theme') === 'dark');
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ dark, setDark }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within GlobalProvider');
  }
  return context;
};
