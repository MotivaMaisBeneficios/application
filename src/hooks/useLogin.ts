import * as Yup from 'yup';
import { toast } from '@/utils/toatfy';

export const useLogin = () => {
  const schema = Yup.object({
    login: Yup.string().required('Login obrigatório').email('Email inválido'),
    pass: Yup.string().required('Senha obrigatória'),
  });

  const fetchLogin = async (values: { login: string; pass: string }) =>
    await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });

  const login = async (values: { login: string; pass: string }) => {
    const res = await fetchLogin(values);

    document.cookie = `token=${JSON.stringify(values)}; path=/; max-age=86400;`;

    if (res.ok) {
      toast.success('Login efetuado!');
    } else {
      toast.error('Erro ao logar!');
    }
  };

  return {
    login,
    schema,
  };
};
