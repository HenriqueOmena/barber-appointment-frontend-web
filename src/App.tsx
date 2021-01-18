import React from 'react';
import SignIn from 'pages/Signin/Signin';
import SignUp from 'pages/SignUp/SignUp';
import { AuthProvider } from 'hooks/useAuth';
import AppProvider from 'hooks';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      {/* <SignUp /> */}
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
