import { FormProvider, useForm } from 'react-hook-form';
import * as styles from './Login.css';
import { useNavigate } from 'react-router';
import { Input } from '@components/index';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const formInstance = useForm<LoginForm>();
  const { handleSubmit } = formInstance;
  const navigate = useNavigate();

  const onLogin = (data: LoginForm) => {
    console.log(data);
  };

  const onGoToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <FormProvider {...formInstance}>
        <form onSubmit={handleSubmit(onLogin)} className={styles.formBox}>
          <h1 className={styles.title}>로그인</h1>
          <Input<LoginForm> label="이메일" name="email" />
          <Input<LoginForm> label="비밀번호" name="password" />
          <button type="submit" className={styles.button}>
            로그인
          </button>
        </form>
      </FormProvider>
      <p onClick={onGoToSignup} className={styles.goToRegister}>
        회원가입 &rarr;
      </p>
    </div>
  );
};

export default Login;
