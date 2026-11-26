import {
  createContext,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type PropsWithChildren,
  type ReactElement,
} from "react";
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

type Position = {
  x: number;
  y: number;
};
type StyledListProps = {
  $position: Position;
};

const StyledList = styled.ul<StyledListProps>`
  position: fixed;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-sm);
  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
  border: 1px solid var(--color-border);
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
    transition: all 0.2s;
  }
  &:hover svg {
    color: var(--color-accent);
  }
`;

type MenusContextProps = {
  open: (id: string) => void;
  close: () => void;
  setPosition: (position: Position) => void;
  openId: string;
  position: Position | null;
};

const MenusContext = createContext<MenusContextProps | null>(null);

function useMenusContext() {
  const context = useContext(MenusContext);
  if (!context) {
    throw new Error("MenusContext must be used inside MenusContext");
  }
  return context;
}

type RootMenuProps = PropsWithChildren;

function RootMenus({ children }: RootMenuProps) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState<Position | null>(null);

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

type ToggleProps = {
  id: string;
};

function Toggle({ id }: ToggleProps) {
  const { open, close, openId, setPosition } = useMenusContext();
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    // getting the nearest target for positioning
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 4,
    });
    if (openId !== id) {
      open(id);
    } else {
      close();
    }
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

type ListProps = PropsWithChildren<{
  id: string;
}>;

function List({ id, children }: ListProps) {
  const { openId, position, close } = useMenusContext();
  const ref = useClickOutside<HTMLUListElement>({
    handler: close,
    listenCapturing: false,
  });
  if (openId !== id || position === null) return null;
  return createPortal(
    <StyledList $position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body,
  );
}

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  icon: ReactElement;
}>;

function Button({ children, icon, onClick }: ButtonProps) {
  const { close } = useMenusContext();
  function handleClick() {
    onClick();
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

const Menus = Object.assign(RootMenus, {
  Menu,
  Toggle,
  List,
  Button,
});

export default Menus;
