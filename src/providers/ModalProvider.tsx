import { createContext, PropsWithChildren, ReactNode, useState } from 'react';


const createModal = () => {}

interface ModalContextProps {}

export const ModalContext = createContext<ModalContextProps>({});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalStack, setModalStack] = useState<ReactNode[]>([]);

  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
};

export default ModalProvider;

/** NOTE
 * 1. show modal 함수 호출 시 modalStack에 modal 추가
 * 2. close modal 함수 호출 시 modalStack에서 arg로 제공받은 id를 가진 modal 제거
 */
