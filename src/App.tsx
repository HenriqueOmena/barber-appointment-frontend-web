import React from 'react';
import SignIn from 'pages/Signin';
import SignUp from 'pages/SignUp';
import AuthContext from 'context/AuthContext';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Omena' }}>
      {/* <SignUp /> */}
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
