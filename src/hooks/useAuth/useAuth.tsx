import axios from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { AuthContextProps, AuthState } from './useAuth.interface';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('barber:token');
    const user = localStorage.getItem('barber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await axios.post('http://localhost:3333/sessions', {
      email,
      password,
    });

    console.log('fuu', response);
    const { token, user } = response?.data;

    localStorage.setItem('barber:token', token);
    localStorage.setItem('barber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('barber:token');
    localStorage.removeItem('barber:user');
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth need be wrapped by AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };