import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledModal = styled.div`
  max-height: 90dvh;
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
`;

const Overlay = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: var(--color-backdrop);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
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

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, openName, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  // To close the modal when clicking outside of the modal window
  const ref = useClickOutside(close);

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

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
