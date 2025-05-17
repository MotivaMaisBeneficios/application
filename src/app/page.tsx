'use client';
import { TextField } from '@mui/material';
import { useDarkMode } from './hooks/useDarkMode';
import { useEffect } from 'react';
import { theme } from '@/app/components/MaterialThemeProvider';

export default function Home() {
  const [dark] = useDarkMode();

  useEffect(() => {
    console.log({ dark });
  }, [dark]);
  const themeMui = dark ? theme.lightTheme : theme.darkTheme;

  return (
    <div className="flex flex-col items-center justify-center p-24 border">
      <h1>Login page</h1>
      <TextField
        label="Outlined secondary"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            color: themeMui.palette.text.primary,
            '& fieldset': {
              borderColor: themeMui.palette.text.primary,
            },
            '&:hover fieldset': {
              borderColor: themeMui.palette.text.primary,
            },
            '&.Mui-focused fieldset': {
              borderColor: themeMui.palette.text.primary,
            },
          },
          '& label': {
            color: themeMui.palette.text.primary,
          },
        }}
      />
    </div>
  );
}
