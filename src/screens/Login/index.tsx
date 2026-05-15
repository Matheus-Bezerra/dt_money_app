import { PublicStackParamsList } from '@/routes/PublicRoutes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Login = () => {
  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  return (
    <View className="flex-1 items-center justify-center bg-background-primary">
      <Text className="text-xl font-semibold text-white">Login</Text>
      <TextInput className="w-full bg-gray-500" />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="text-xl font-semibold text-white">Register</Text>
      </TouchableOpacity>
    </View>
  );
};
