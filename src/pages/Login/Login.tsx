import { useForm } from 'react-hook-form';
import * as styles from './Login.css';
import { useNavigate } from 'react-router';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onLogin = (data: LoginForm) => {
    console.log(data);
  };

  const onGoToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onLogin)}>
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
      <p onClick={onGoToSignup} className={styles.goToRegister}>
        회원가입 &rarr;
      </p>
    </div>
  );
};

export default Login;
