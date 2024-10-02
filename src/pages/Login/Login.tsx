import { useForm } from 'react-hook-form';
import * as theme from '@styles/theme.css';
import * as styles from './Login.css';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const handleLogin = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className={`${theme.themeClass} ${styles.container}`}>
      <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
        <h1 className={styles.title}>로그인</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            이메일
          </label>
          <input type="email" id="email" className={styles.input} {...register('email', { required: true })} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <input type="password" id="password" className={styles.input} {...register('password', { required: true })} />
        </div>
        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
