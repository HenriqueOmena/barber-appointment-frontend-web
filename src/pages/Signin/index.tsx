import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from 'assets/logo.svg';
import { BackgroundImage, Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="BarberAppointment" />

        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Email" />

          <input type="password" placeholder="Senha" />

          <button> Entrar </button>

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
