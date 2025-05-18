'use client';
import { TextField } from '@mui/material';
import { useGlobalContext } from '@/context/GlobalContext';
import { useField } from 'formik';
import { theme } from '@/context/MaterialThemeProvider';

interface InputProps {
  label: string;
  name: string;
  variant?: 'filled' | 'outlined' | 'standard';
  type?:
    | 'text'
    | 'date'
    | 'email'
    | 'password'
    | 'number'
    | 'search'
    | 'url'
    | 'datetime-local'
    | 'tel'
    | 'month'
    | 'week'
    | 'time';
}

export default function Input({
  label,
  name,
  type = 'text',
  variant = 'outlined',
  ...props
}: InputProps) {
  const { dark } = useGlobalContext();
  const [field, meta] = useField(name);
  const labelToDefaultFocus = [
    'date',
    'datetime-local',
    'month',
    'time',
    'week',
  ];

  const themeMui = dark ? theme.lightTheme : theme.darkTheme;

  return (
    <>
      <TextField
        {...field}
        {...props}
        name={name}
        label={label}
        variant={variant}
        autoComplete="off"
        error={Boolean(meta.touched && meta.error)}
        helperText={meta.touched && meta.error ? meta.error : ''}
        type={type}
        focused={labelToDefaultFocus.includes(type)}
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
          '& .MuiFormHelperText-root': {
            fontSize: '0.75rem', // ou o tamanho que preferir
            marginLeft: '0.1rem',
          },
          '& input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 1000px ${themeMui.palette.background.default} inset`,
            WebkitTextFillColor: themeMui.palette.text.primary,
            transition: 'background-color 5000s ease-in-out 0s',
          },
          '& label': {
            color: themeMui.palette.text.primary,
          },
        }}
      />
    </>
  );
}
