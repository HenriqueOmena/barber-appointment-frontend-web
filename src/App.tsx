import React from 'react';
import SignIn from 'pages/Signin/Signin';
import SignUp from 'pages/SignUp/SignUp';
import { AuthProvider } from 'hooks/useAuth';
import AppProvider from 'hooks';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
