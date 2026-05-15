import { Login } from '@/screens/Login';
import { Register } from '@/screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type PublicStackParamsList = {
  login: undefined;
  Register: undefined;
};

export const PublicRoutes = () => {
  const PublickStack = createNativeStackNavigator<PublicStackParamsList>();

  return (
    <PublickStack.Navigator screenOptions={{ headerShown: false }}>
      <PublickStack.Screen name="login" component={Login} />
      <PublickStack.Screen name="Register" component={Register} />
    </PublickStack.Navigator>
  );
};
