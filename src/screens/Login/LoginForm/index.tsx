import { AppButton } from '@/components/AppButton';
import { AppInput } from '@/components/AppInput';
import { PublicStackParamsList } from '@/routes/PublicRoutes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Text, View } from 'react-native';
import { schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from '@/context/auth.context';
import { useErrorHandler } from '@/shared/hooks/useErrorHandler';
import { colors } from '@/shared/colors';

export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleAuthenticate } = useAuthContext();
  const { handleError } = useErrorHandler();

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const onSubmit = async (data: FormLoginParams) => {
    try {
      await handleAuthenticate(data);
    } catch (error) {
      handleError(error, 'Falha ao realizar o login');
    }
  };

  return (
    <>
      <AppInput
        control={control}
        name="email"
        lable="EMAIL"
        placeholder="mail@example.br"
        leftIconName="mail-outline"
      />
      <AppInput
        control={control}
        name="password"
        lable="SENHA"
        placeholder="Sua senha"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <View className="mb-6 mt-8 min-h-[250px] flex-1 justify-between">
        <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">
          {isSubmitting ? <ActivityIndicator color={colors.white} /> : 'Login'}
        </AppButton>

        <View>
          <Text className="mb-6 text-base text-gray-300">Ainda não possui uma conta?</Text>
          <AppButton
            onPress={() => navigation.navigate('Register')}
            iconName="arrow-forward"
            mode="outline">
            Cadastrar
          </AppButton>
        </View>
      </View>
    </>
  );
};
