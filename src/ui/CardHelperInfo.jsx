import { HiOutlineInformationCircle } from "react-icons/hi2";
import styled from "styled-components";

const StyledHelperInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: help;
  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const InfoMark = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-on-accent-surface);
  }
`;

const InfoText = styled.span`
  width: 12rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-2);
  font-size: var(--text-sm);
  text-align: center;
  position: absolute;
  top: 120%;
  right: 50%;
  visibility: hidden;
  opacity: 0;
  z-index: 999;
  transform: translate(50%);
  transition:
    opacity 0.2s,
    visibility 0.2s;
`;

function CardHelperInfo({ children }) {
  return (
    <StyledHelperInfo>
      <InfoMark>
        <HiOutlineInformationCircle />
      </InfoMark>
      <InfoText>{children}</InfoText>
    </StyledHelperInfo>
  );
}

export default CardHelperInfo;
