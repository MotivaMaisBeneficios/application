'use client';
import { theme } from '@/app/components/MaterialThemeProvider';
import { useGlobalContext } from '@/app/context/GlobalContext';
import { Button as MaterialButton } from '@mui/material';

interface ButtonProps {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  onClick?: () => void;
  textTransform?: boolean;
}

export default function Button({
  title,
  onClick,
  type,
  variant,
  textTransform,
  ...props
}: ButtonProps) {
  const { dark } = useGlobalContext();

  const themeMui = dark ? theme.lightTheme : theme.darkTheme;

  return (
    <MaterialButton
      {...props}
      type={type}
      variant={variant}
      onClick={onClick}
      sx={{
        color: themeMui.palette.text.primary,
        borderColor: themeMui.palette.text.primary,
        fontFamily: 'Arial',
        textTransform: textTransform ? 'uppercase' : ' none', // evita letras maiúsculas automáticas

        backgroundColor: themeMui.palette.action.hover,
        '&:hover': {
          borderColor: themeMui.palette.primary.main,
          backgroundColor: themeMui.palette.action.hover,
        },
      }}
    >
      {title}
    </MaterialButton>
  );
}
