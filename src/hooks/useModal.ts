import { useContext } from 'react';

import { ModalContext } from '@providers/Modal/ModalProvider';

const useModal = () => useContext(ModalContext);

export default useModal;
