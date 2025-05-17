import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const initial = stored === 'dark' || (!stored && prefersDark);
    setEnabled(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  const toggleTheme = () => {
    const isDark = !enabled;
    setEnabled(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
  useEffect(() => {
    const change = localStorage.getItem('theme');
    console.log({ change });
  }, [enabled]);

  return [enabled, toggleTheme] as const;
}
