import { ModalContext } from '@providers/Modal/ModalProvider';
import { useContext } from 'react';

const useModal = () => useContext(ModalContext);

export default useModal;
