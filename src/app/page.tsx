'use client';
import * as Yup from 'yup';
import { toast } from '@/utils/toatfy';
import { GlobalForm } from '@/components/Global/Form';
import Input from '@/components/Global/Input';
import Button from '@/components/Global/Button';

export default function Home() {
  const schema = Yup.object({
    login: Yup.string().required('Login obrigatório').email('Email inválido'),
    pass: Yup.string().required('Senha obrigatória'),
  });

  return (
    <div className="flex flex-col items-center justify-center p-24">
      <GlobalForm
        initialValues={{ login: '', pass: '' }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          toast.info('Operação realizada com sucesso!');
        }}
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <Input label="Login" name="login" />
          </div>

          <div className="col-span-12">
            <Input label="Senha" name="pass" />
          </div>

          <Button
            title="Entrar"
            type="submit"
            variant="contained"
            className="col-span-12"
          />
        </div>
      </GlobalForm>
    </div>
  );
}
