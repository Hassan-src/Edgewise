import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSideBar = styled.div`
  background-color: var(--color-surface);
  padding: var(--space-12) var(--space-10);
  border-right: 1px solid var(--color-border);
  grid-row: 1 /-1;
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
    </StyledSideBar>
  );
}

export default SideBar;
