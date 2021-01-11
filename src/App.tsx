import React from 'react';
import SignIn from 'pages/Signin';
import SignUp from 'pages/SignUp';
import AuthProvider from 'hooks/AuthContext';
import Toast from 'components/Toast';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* <SignUp /> */}
      <SignIn />
      <Toast type="success" />
      <Toast type="warning" />
      <Toast type="info" />
      <Toast type="error" />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
