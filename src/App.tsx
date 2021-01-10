import React from 'react';
import SignIn from 'pages/Signin';
import SignUp from 'pages/SignUp';
import AuthProvider from 'hooks/AuthContext';
import Toast from 'components/toast';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* <SignUp /> */}
      <SignIn />
      ASD
      <Toast />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
