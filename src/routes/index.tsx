import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './PublicRoutes';
import { useCallback, useState } from 'react';
import { PrivateRoutes } from './PrivateRoutes';
import { useAuthContext } from '@/context/auth.context';

const NavigationRoutes = () => {
  const { token, user } = useAuthContext();

  const Routes = useCallback(() => {
    if (user && token) {
      return <PrivateRoutes />;
    } else {
      return <PublicRoutes />;
    }
  }, [user, token]);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
