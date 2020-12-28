import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import Input from 'components/input';
import Button from 'components/button';
import { useForm } from 'react-hook-form';
import { BackgroundImage, Container, Content } from './styles';

type Inputs = {
  email: string;
  name: string;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

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
            placeholder="Email"
            inputRef={register}
          />
          <Input
            icon={FiUser}
            name="name"
            placeholder="Nome"
            inputRef={register}
          />
          <Input
            icon={FiLock}
            name="password"
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
