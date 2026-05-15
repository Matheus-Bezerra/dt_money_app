import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não coincidem')
    .required('Confirmação de senha é obrigatória'),
});

export type Schema = yup.InferType<typeof schema>;
