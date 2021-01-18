import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import Input from 'components/input';
import Button from 'components/button';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BackgroundImage, Container, Content } from './styles';

const SignUp: React.FC = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome Obrigatorio'),
    email: Yup.string()
      .required('Email Obrigatorio')
      .email('Digite um email valido'),
    password: Yup.string().min(6, 'Minimo de 6 digitos'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(async (data: unknown) => {
    // console.log(data);
  }, []);

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <img src={logoImg} alt="BarberAppointment" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu Cadastro</h1>

          <Input
            icon={FiMail}
            name="email"
            errors={errors?.email?.message}
            placeholder="Email"
            inputRef={register}
          />

          <Input
            icon={FiUser}
            name="name"
            errors={errors?.name?.message}
            placeholder="Nome"
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

          <Button type="submit"> Cadastrar </Button>
        </form>

        <a href="#create">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
