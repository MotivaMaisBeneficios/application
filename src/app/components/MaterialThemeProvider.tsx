import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0a2342' },
    background: { default: '#e6f0fa' },
    text: { primary: '#0a2342' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e6f0fa' },
    background: { default: '#0a2342' },
    text: { primary: '#e6f0fa' },
  },
});
export const theme = {
  lightTheme,
  darkTheme,
};
