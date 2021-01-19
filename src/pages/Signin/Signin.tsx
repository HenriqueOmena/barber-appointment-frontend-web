import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import Input from 'components/input';
import Button from 'components/button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { useToast } from 'hooks/useToast';
import { Link } from 'react-router-dom';
import {
  BackgroundImage,
  Container,
  Content,
  Animation,
} from './Signin.styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn, user } = useAuth();
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email Obrigatorio')
      .email('Digite um email valido'),
    password: Yup.string().required('Digite uma senha'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data: SignInFormData) => {
    signIn({
      email: data.email,
      password: data.password,
    }).catch(({ response }) => {
      addToast({
        type: 'error',
        title: `${response?.statusText}`,
        description: response?.data?.message,
      });
    });
  }, []);

  return (
    <Container>
      <Content>
        <Animation>
          <img src={logoImg} alt="BarberAppointment" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Faça seu logon</h1>
            {/* <button onClick={test}>TESTING</button> */}
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

          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </Animation>
      </Content>
      <BackgroundImage />
    </Container>
  );
};

export default SignIn;
