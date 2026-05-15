import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type DismissKeyboardViewProps = {
  children: React.ReactNode;
};

export const DismissKeyboardView = ({ children }: DismissKeyboardViewProps) => {
  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <Pressable className="flex-1" onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView className="flex-1" behavior={'padding'}>
          <ScrollView keyboardShouldPersistTaps="handled" className="flex-1">
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
};
