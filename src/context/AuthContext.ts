import { createContext } from 'react';

interface AuthContextProps {
  name: string;
}

const AuthContext = createContext<AuthContextProps | Record<string, unknown>>(
  {}
);

export default AuthContext;
