import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginEmail } from 'firebase/client';
import Button from './Button';
import Input from './Input';
import { typesButton, typesInput } from 'Utils/Data';
import SchemaValided from 'Utils/userValidate';
import { useState } from 'react';
interface UserInput {
  email: string;
  password: string;
}

export default function Auth(): JSX.Element {
  const { register, errors, handleSubmit } = useForm<UserInput>({
    resolver: yupResolver(SchemaValided),
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = (values: UserInput): void => {
    setLoading(!loading);
    loginEmail(values.email, values.password).catch((e) => {
      setError(!error);
      console.error(e);
      setLoading(!loading);
    });
  };
  return (
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Iniciar sesion
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="rounded-md -space-y-px">
          {error ? (
            <span className="font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Error email o contraseña equivacoda, si sigue igual comuniquese
              con el administrador
            </span>
          ) : null}
          <div>
            <label htmlFor="email-address">Email</label>
            <Input
              inputRef={register}
              name="email"
              type={typesInput.email}
              placeholder="Email"
              className="w-full rounded-md"
              error={errors.email ? true : false}
            />
            {errors.email ? (
              <span className="font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.email?.message}
              </span>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <Input
              name="password"
              inputRef={register}
              placeholder="Contraseña"
              type={typesInput.password}
              className="w-full rounded-md"
              error={errors.password ? true : false}
            />
            {errors.password ? (
              <span className="font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.password?.message}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Olvidaste la contraseña?
            </a>
          </div>
        </div>
        <Button
          type={typesButton.submit}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disable={loading}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Iniciar
        </Button>
      </form>
    </div>
  );
}
