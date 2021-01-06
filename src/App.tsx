import React from 'react';
import SignIn from 'pages/Signin';
import SignUp from 'pages/SignUp';
import AuthProvider from 'context/AuthContext';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* <SignUp /> */}
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
