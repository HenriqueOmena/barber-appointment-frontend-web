import React, { createContext, useCallback } from 'react';
import api from 'request';

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
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });
      console.log('singIn ', response);
    } catch (error) {
      console.log(error.config, 'error');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'hjueahueahu', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
