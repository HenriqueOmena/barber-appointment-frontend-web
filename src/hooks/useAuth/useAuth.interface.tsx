export interface SignInCredencials {
  email: string;
  password: string;
}

export interface User {
  avatar: string;
  created_at: string;
  deleted_at?: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
}

export interface AuthState {
  token: string;
  user: User;
}

export interface AuthContextProps {
  user: User;
  signIn: (credentials: SignInCredencials) => Promise<void>;
  signOut: () => void;
}
