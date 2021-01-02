import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import Input from 'components/input';
import Button from 'components/button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BackgroundImage, Container, Content } from './styles';

const SignIn: React.FC = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email Obrigatorio')
      .email('Digite um email valido'),
    password: Yup.string().min(6, 'Minimo de 6 digitos'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(async (data: unknown) => {
    console.log(data);
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
