import { DismissKeyboardView } from '@/components/DismissKeyboardView';
import { View } from 'react-native';
import { LoginForm } from './LoginForm';

export const Login = () => {
  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center">
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
