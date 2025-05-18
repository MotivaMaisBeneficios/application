import { useGlobalContext } from '@/context/GlobalContext';
import { useEffect } from 'react';

export function useDarkMode() {
  const { dark, setDark } = useGlobalContext();

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const initial = stored === 'dark' || (!stored && prefersDark);
    setDark(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return [dark, toggleTheme] as const;
}
