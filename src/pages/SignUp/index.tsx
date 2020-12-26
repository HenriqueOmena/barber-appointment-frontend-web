import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import Input from 'components/input';
import Button from 'components/button';
import { BackgroundImage, Container, Content } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <img src={logoImg} alt="BarberAppointment" />

        <form>
          <h1>Faça seu Cadastro</h1>

          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button> Cadastrar </Button>
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
