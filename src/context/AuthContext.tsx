import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';
import barberApi from 'request';

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: any;
}
interface AuthContextProps {
  name: string;
  signIn: (credentials: SignInCredencials) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('barber:token');
    const user = localStorage.getItem('barber:user');

    if (token && user) {
      return { token, user: JSON.stringify(user) };
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await barberApi.post('http://localhost:3333/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('barber:token', token);
    localStorage.setItem('barber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'hjueahueahu', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
