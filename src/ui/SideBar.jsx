import styled from "styled-components";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

import MainNav from "./MainNav";
import ButtonIcon from "./ButtonIcon";
import { useAppMode } from "../context/useAppMode";
import SmallNav from "./SmallNav";
import DarkModeToggle from "./DarkModeToggle";

const StyledSideBar = styled.div`
  background-color: var(--color-surface);
  padding: var(--space-10) var(--space-3);
  border-right: 1px solid var(--color-border);
  grid-row: 1 /-1;
  display: flex;
  flex-direction: column;
  @media (max-width: 950px) {
    border-radius: var(--radius-full);
    border: 1px solid var(--color-border);
    padding: var(--space-3) var(--space-3);
    flex-direction: row;
    position: absolute;
    z-index: 999;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

const SideBarTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--space-5);
  @media (max-width: 950px) {
    display: none;
  }
`;

const NavBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SideBar() {
  const { handleResize, resize } = useAppMode();
  return (
    <StyledSideBar>
      <SideBarTop>
        <ButtonIcon onClick={handleResize}>
          <HiOutlineCodeBracketSquare />
        </ButtonIcon>
      </SideBarTop>
      <NavBar>{resize ? <MainNav /> : <SmallNav />}</NavBar>
      <DarkModeToggle />
    </StyledSideBar>
  );
}

export default SideBar;
