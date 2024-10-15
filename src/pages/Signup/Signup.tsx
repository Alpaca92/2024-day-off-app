import { useForm } from 'react-hook-form';
import * as styles from './Signup.css';
import { useNavigate } from 'react-router';

interface LoginForm {
  email: string;
  password: string;
}

const Signup = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onLogin = (data: LoginForm) => {
    console.log(data);
  };

  const onGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onLogin)}>
        <h1 className={styles.title}>회원가입</h1>
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
          회원가입
        </button>
      </form>
      <p onClick={onGoToLogin} className={styles.goToLogin}>
        &larr; 로그인
      </p>
    </div>
  );
};

export default Signup;
