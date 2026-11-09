import styled from "styled-components";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

import MainNav from "./MainNav";
import ButtonIcon from "./ButtonIcon";
import { useAppMode } from "../context/useAppMode";
import SmallNav from "./SmallNav";

const StyledSideBar = styled.div`
  background-color: var(--color-surface);
  padding: var(--space-10) var(--space-3);
  border-right: 1px solid var(--color-border);
  grid-row: 1 /-1;
  display: flex;
  flex-direction: column;
`;

const SideBarTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--space-5);
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
    </StyledSideBar>
  );
}

export default SideBar;
