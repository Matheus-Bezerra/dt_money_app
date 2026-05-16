import { FormLoginParams } from '@/screens/Login/LoginForm';
import { FormRegisterParams } from '@/screens/Register/RegisterForm';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import * as AuthService from '@/shared/services/dt-money/auth.service';
import { IUSer } from '@/shared/interfaces/user-interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  user: IUSer | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => Promise<void>;
  restoreUserSession: () => Promise<string | null>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUSer | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const handleAuthenticate = async (params: FormLoginParams) => {
    const { user, token } = await AuthService.authenticate(params);

    await AsyncStorage.setItem('dt-money-user', JSON.stringify({ user, token }));

    setUser(user);
    setToken(token);
  };

  const handleRegister = async (params: FormRegisterParams) => {
    const { user, token } = await AuthService.registerUser(params);

    await AsyncStorage.setItem('dt-money-user', JSON.stringify({ user, token }));

    setUser(user);
    setToken(token);
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('dt-money-user');

    setUser(null);
    setToken(null);
  };

  const restoreUserSession = async () => {
    const userData = await AsyncStorage.getItem('dt-money-user');

    if (userData) {
      const { user, token } = JSON.parse(userData);

      setUser(user);
      setToken(token);
    }

    return userData;
  };

  return (
    <AuthContext.Provider
      value={{ user, token, handleAuthenticate, handleRegister, handleLogout, restoreUserSession }}>
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
