import useModal from '@hooks/useModal';
import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface CreateModalProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactElement;
}

const CreateModal = ({ children }: CreateModalProps) => {
  const { closeModal } = useModal();

  try {
    if (!children.key) {
      throw new Error('key prop is required when using CreateModal');
    }

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
  } catch (error) {
    console.log(error);
  }
};

export default CreateModal;
