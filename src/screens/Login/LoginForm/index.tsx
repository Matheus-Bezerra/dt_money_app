import { AppButton } from '@/components/AppButton';
import { AppInput } from '@/components/AppInput';
import { PublicStackParamsList } from '@/routes/PublicRoutes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

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

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const onSubmit = (data: FormLoginParams) => {
    console.log(data);
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
          Login
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
