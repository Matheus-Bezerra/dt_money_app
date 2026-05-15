import { Login } from '@/screens/Login';
import { Register } from '@/screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
};

export const PublicRoutes = () => {
  const PublickStack = createNativeStackNavigator<PublicStackParamsList>();

  return (
    <PublickStack.Navigator screenOptions={{ headerShown: false }}>
      <PublickStack.Screen name="Login" component={Login} />
      <PublickStack.Screen name="Register" component={Register} />
    </PublickStack.Navigator>
  );
};
