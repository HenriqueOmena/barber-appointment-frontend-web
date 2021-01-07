import axios from 'axios';
import React, { createContext, useCallback } from 'react';
import barberApi from 'request';

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextProps {
  name: string;
  signIn: (credentials: SignInCredencials) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await barberApi.post('http://localhost:3333/sessions', {
      email,
      password,
    });

    console.log('singIn ', response);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'hjueahueahu', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
