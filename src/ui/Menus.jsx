import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: var(--space-1);
  border-radius: var(--radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-surface-muted);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-text);
  }
`;

const StyledList = styled.ul`
  position: fixed;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-sm);
  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
  border: 1px solid var(--color-bg-400);
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: var(--space-5);

  &:hover {
    background-color: var(--color-bg);
  }

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--color-text);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;
  // Closing the menu on scroll
  useEffect(() => {
    function handleScroll() {
      close();
    }
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
  return (
    <MenusContext.Provider
      value={{ close, open, openId, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { open, close, openId, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    // getting the nearest target for positioning
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 4,
    });
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useClickOutside(close);
  if (openId !== id) return null;
  return createPortal(
    <StyledList $position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
