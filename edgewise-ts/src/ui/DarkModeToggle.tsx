import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";

import { useAppMode } from "../context/useAppMode";
import styled, { css } from "styled-components";

type DarkModeToggleProps = {
  $responsive: boolean;
};

const StyledDarkModeToggle = styled.div<DarkModeToggleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  &:hover {
    background-color: var(--color-surface-muted);
  }
  ${(props) =>
    props.$responsive &&
    css`
      @media (max-width: 950px) {
        margin-left: var(--space-5);
      }
    `}
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useAppMode();
  return (
    <StyledDarkModeToggle $responsive>
      <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
      </ButtonIcon>
    </StyledDarkModeToggle>
  );
}

export default DarkModeToggle;
