import { Button, Input } from '@components/index';
import * as styles from './ChangePasswordModal.css';
import useModal from '@hooks/useModal';
import { sprinkles } from '@styles/sprinkles.css';
import { FormProvider, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { MODAL_KEYS } from 'src/constants';

interface ChangePasswordForm {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePasswordModal = () => {
  const { closeModal } = useModal();
  const formInstance = useForm<ChangePasswordForm>();
  const { handleSubmit } = formInstance;

  return (
    <div>
      <h1 className={styles.title}>비밀번호 변경</h1>
      <form
        className={clsx(
          sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 'medium',
          }),
          styles.formBox,
        )}
        onSubmit={handleSubmit(() => {})}
      >
        <FormProvider {...formInstance}>
          <Input<ChangePasswordForm> label="기존 비밀번호" name="password" />
          <Input<ChangePasswordForm> label="새 비밀번호" name="newPassword" />
          <Input<ChangePasswordForm> label="비밀번호 확인" name="confirmPassword" />
        </FormProvider>
        <div
          className={clsx(
            sprinkles({
              display: 'flex',
              gap: 'small',
            }),
            styles.buttonBox,
          )}
        >
          <Button fontSize="small" className={styles.button}>
            확인
          </Button>
          <Button fontSize="small" className={styles.button} onClick={() => closeModal(MODAL_KEYS.CHANGE_PASSWORD)}>
            취소
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordModal;
