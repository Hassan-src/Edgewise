import {
  cloneElement,
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledModal = styled.div`
  width: 100%;
  max-width: fit-content;
  max-height: calc(100dvh - 2rem);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  padding: var(--space-5) var(--space-6);
  transition: all 0.5s;
  overflow: auto;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100dvw;
    max-height: 100dvh;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: var(--color-backdrop);
  backdrop-filter: blur(4px);
  position: fixed;
  inset: 0;
  z-index: 999;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--space-2);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  &:hover {
    background-color: var(--color-bg-400);
  }
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-text-secondary);
  }
`;

type ModalContextProps = {
  open: (name: string) => void;
  openName: string;
  close: () => void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal components must be used inside Modal.");
  }
  return context;
}

type RootModalProps = PropsWithChildren;

function RootModal({ children }: RootModalProps) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, openName, open }}>
      {children}
    </ModalContext.Provider>
  );
}

type OpenProps = {
  children: ReactElement<{
    onClick: () => void;
  }>;
  opens: string;
};

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useModalContext();
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

type WindowProps = {
  children: ReactElement<{
    onCloseModal?: () => void;
  }>;
  name: string;
};

function Window({ children, name }: WindowProps) {
  const { openName, close } = useModalContext();
  // To close the modal when clicking outside of the modal window
  const ref = useClickOutside<HTMLDivElement>({ handler: close });

  if (name !== openName) return null;
  // To avoid the modal to get cut by the overflow property we use createPortal
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

const Modal = Object.assign(RootModal, {
  Open,
  Window,
});

export default Modal;
