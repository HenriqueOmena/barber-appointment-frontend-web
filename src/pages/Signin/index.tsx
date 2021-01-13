import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import Input from 'components/input';
import Button from 'components/button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AuthProvider, useAuth } from 'hooks/useAuth/useAuth';
import { BackgroundImage, Container, Content } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn, user } = useAuth();
  console.log('aaa', user);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email Obrigatorio')
      .email('Digite um email valido'),
    password: Yup.string().required('Digite uma senha'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(async (data: SignInFormData) => {
    signIn({
      email: data.email,
      password: data.password,
    });
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="BarberAppointment" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu logon</h1>

          <Input
            icon={FiMail}
            name="email"
            errors={errors?.email?.message}
            placeholder="Email"
            inputRef={register}
          />

          <Input
            icon={FiLock}
            name="password"
            errors={errors?.password?.message}
            type="password"
            placeholder="Senha"
            inputRef={register}
          />

          <Button type="submit"> Entrar </Button>

          <a href="#forgot">Esqueci a senha</a>
        </form>

        <a href="#create">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <BackgroundImage />
    </Container>
  );
};

export default SignIn;
