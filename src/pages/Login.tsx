import { useForm } from 'react-hook-form';

interface LoginForm {
  email: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const handleLogin = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        <button>Login</button>
      </form>
    </main>
  );
};

export default Login;
