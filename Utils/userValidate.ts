import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email invalido').required('Requerido'),
  password: Yup.string()
    .min(8, 'Minimos caracteres 8')
    .max(150, 'Limite maximo 150 caracteres')
    .required('Requerido'),
});

export default SignupSchema;
