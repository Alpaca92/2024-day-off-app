import { FormProvider, useForm } from 'react-hook-form';
import * as styles from './Signup.css';
import { useNavigate } from 'react-router';
import { Button, Input } from '@components/index';

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const formInstance = useForm<SignupForm>();
  const { handleSubmit } = formInstance;
  const navigate = useNavigate();

  const onSignup = (data: SignupForm) => {
    console.log(data);
  };

  const onGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <FormProvider {...formInstance}>
        <form onSubmit={handleSubmit(onSignup)} className={styles.formBox}>
          <h1 className={styles.title}>회원가입</h1>
          <Input<SignupForm> label="이메일" name="email" />
          <Input<SignupForm> label="비밀번호" name="password" />
          <Input<SignupForm> label="비밀번호확인" name="confirmPassword" />
          <Button type="submit" variant="primary">
            가입
          </Button>
        </form>
      </FormProvider>
      <p onClick={onGoToLogin} className={styles.goToLogin}>
        &larr; 로그인
      </p>
    </div>
  );
};

export default Signup;
