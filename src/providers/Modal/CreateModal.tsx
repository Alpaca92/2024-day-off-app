import { MouseEvent, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import useModal from '@hooks/useModal';
import { absolute } from '@styles/Recipes/absolute.css';

import clsx from 'clsx';

import * as styles from './CreateModal.css';

interface CreateModalProps {
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

    const onInsideClick = (event: MouseEvent) => {
      event.stopPropagation();
    };

    return createPortal(
      <div onClick={onOutsideClick} className={clsx(absolute({ type: 'leftTop', fullSize: true }), styles.container)}>
        <div className={clsx(absolute({ type: 'center' }), styles.modal)} onClick={onInsideClick}>
          {children}
        </div>
      </div>,
      node,
      key,
    );
  } catch (error) {
    console.log(error);
  }
};

export default CreateModal;
