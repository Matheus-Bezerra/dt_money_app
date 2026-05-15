import { FormLoginParams } from '@/screens/Login/LoginForm';
import { FormRegisterParams } from '@/screens/Register/RegisterForm';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import * as AuthService from '@/shared/services/dt-money/auth.service';
import { IUSer } from '@/shared/interfaces/user-interface';

type AuthContextType = {
  user: IUSer | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUSer | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const handleAuthenticate = async (params: FormLoginParams) => {
    const { user, token } = await AuthService.authenticate(params);

    setUser(user);
    setToken(token);
  };

  const handleRegister = async (params: FormRegisterParams) => {
    console.log(params);
  };
  const handleLogout = async () => {
    console.log('logout');
  };

  return (
    <AuthContext.Provider value={{ user, token, handleAuthenticate, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
};
