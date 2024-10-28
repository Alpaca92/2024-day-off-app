import { createContext, PropsWithChildren, ReactElement, useMemo, useState } from 'react';

import CreateModal from '@providers/Modal/CreateModal';

interface ModalContextProps {
  showModal: (component: ReactElement) => void;
  closeModal: (key: string) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  showModal: () => {},
  closeModal: () => {},
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalStack, setModalStack] = useState<ReactElement[]>([]);

  const showModal: ModalContextProps['showModal'] = (component) => {
    setModalStack((prev) => [...prev, component]);
  };

  const closeModal: ModalContextProps['closeModal'] = (key) => {
    if (modalStack.length === 0) return;
    setModalStack((prev) => prev.filter((modal) => modal?.key !== key));
  };

  const value = useMemo(
    () => ({
      showModal,
      closeModal,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modalStack],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalStack.length > 0 && modalStack.map((modal) => <CreateModal key={modal.key}>{modal}</CreateModal>)}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
