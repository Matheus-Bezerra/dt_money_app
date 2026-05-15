import { AuthHeader } from '@/components/AuthHeader';
import { DismissKeyboardView } from '@/components/DismissKeyboardView';
import { View } from 'react-native';
import { RegisterForm } from './RegisterForm';

export const Register = () => {
  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center">
        <AuthHeader />
        <RegisterForm />
      </View>
    </DismissKeyboardView>
  );
};
