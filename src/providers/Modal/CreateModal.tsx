import useModal from '@hooks/useModal';
import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface CreateModalProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactElement;
}

const CreateModal = ({ children }: CreateModalProps) => {
  const { closeModal } = useModal();

  if (!children || !children.key) return null;

  const node = document.getElementById('modal') as HTMLDivElement;
  const { key } = children;

  const onOutsideClick = () => {
    closeModal(key);
  };

  return (
    <div onClick={onOutsideClick}>
      <div>{createPortal(children, node, key)}</div>
    </div>
  );
};

export default CreateModal;
