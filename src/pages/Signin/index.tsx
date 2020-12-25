import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import Input from 'components/input';
import Button from 'components/button';
import { BackgroundImage, Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="BarberAppointment" />

        <form>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button> Entrar </Button>

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
