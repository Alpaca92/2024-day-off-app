import { MouseEvent } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input, Modal } from '@components/index';
import useModal from '@hooks/useModal';
import { sprinkles } from '@styles/sprinkles.css';
import { MODAL_KEYS } from 'src/constants';

import clsx from 'clsx';

import * as styles from './ChangePasswordModal.css';


interface ChangePasswordForm {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePasswordModal = () => {
  const { closeModal } = useModal();
  const formInstance = useForm<ChangePasswordForm>();
  const { handleSubmit } = formInstance;

  const onPasswordChange: SubmitHandler<ChangePasswordForm> = (data) => {
    console.log(data);
  };

  const onCancelClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    closeModal(MODAL_KEYS.CHANGE_PASSWORD);
  };

  return (
    <Modal title="비밀번호 찾기">
      <form
        className={clsx(
          sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 'medium',
          }),
          styles.formBox,
        )}
        onSubmit={handleSubmit(onPasswordChange)}
      >
        <FormProvider {...formInstance}>
          <Input<ChangePasswordForm> type="password" label="기존 비밀번호" name="password" />
          <Input<ChangePasswordForm> type="password" label="새 비밀번호" name="newPassword" />
          <Input<ChangePasswordForm> type="password" label="비밀번호 확인" name="confirmPassword" />
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
          <Button fontSize="small" variant="white" className={styles.button} onClick={onCancelClick}>
            취소
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ChangePasswordModal;
