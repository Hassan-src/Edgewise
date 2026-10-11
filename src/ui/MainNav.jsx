import { NavLink } from "react-router-dom";
import {
  HiOutlineBookOpen,
  HiOutlineChartPie,
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlineListBullet,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const StyledNavList = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    color: var(--color-text-secondary);
    font-size: var(--text-xl);
    font-weight: 500;
    padding: var(--space-3) var(--space-5);
    transition: all 0.2s;
    position: relative;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-text);
    background-color: var(--color-accent-200);
    border-radius: var(--radius-sm);
    &::before {
      content: "";
      width: 2px;
      height: 65%;
      background-color: var(--color-accent);
      border-radius: var(--radius-md);
      position: absolute;
      left: 0;
    }
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-accent);
    transition: all 0.2s;
  }
  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-text);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavList to="dashboard">
            <HiOutlineSquares2X2 />
            Dashboard
          </StyledNavList>
        </li>
        <li>
          <StyledNavList to="trades">
            <HiOutlineListBullet />
            Trades
          </StyledNavList>
        </li>
        <li>
          <StyledNavList to="daily-trades">
            <HiOutlineClock />
            Daily Trades
          </StyledNavList>
        </li>
        <li>
          <StyledNavList to="stats">
            <HiOutlineChartPie />
            Stats
          </StyledNavList>
        </li>
        <li>
          <StyledNavList to="journal">
            <HiOutlineBookOpen />
            Journal
          </StyledNavList>
        </li>
        <li>
          <StyledNavList to="settings">
            <HiOutlineCog6Tooth />
            Settings
          </StyledNavList>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
