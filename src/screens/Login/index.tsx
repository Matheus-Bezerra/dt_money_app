import { DismissKeyboardView } from '@/components/DismissKeyboardView';
import { View } from 'react-native';
import { LoginForm } from './LoginForm';
import { AuthHeader } from '@/components/AuthHeader';

export const Login = () => {
  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
