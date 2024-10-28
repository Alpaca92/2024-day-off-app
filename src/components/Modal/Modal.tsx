import { ReactNode } from 'react';

import * as styles from './Modal.css';

interface ModalProps {
  children: ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </>
  );
};

export default Modal;
