import { useAuthContext } from '@/context/auth.context';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export const Home = () => {
  const { handleLogout } = useAuthContext();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
