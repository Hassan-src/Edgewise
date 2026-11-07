import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import styled from "styled-components";

const StyledHelperInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  display: inline-block;
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
    color: var(--color-accent);
  }
`;

const InfoText = styled.span`
  visibility: hidden;
  opacity: 0;
  width: 15rem;
  background-color: var(--color-bg);
  text-align: center;
  border-radius: var(--radius-sm);
  padding: var(--space-2);
  font-size: var(--text-sm);
  position: absolute;
  z-index: 999;
  top: 120%;
  right: 50%;
  transform: translate(50%);
  transition:
    opacity 0.2s,
    visibility 0.2s;
`;

function CardHelperInfo({ children }) {
  return (
    <StyledHelperInfo>
      <InfoMark>
        <HiOutlineQuestionMarkCircle />
      </InfoMark>
      <InfoText>{children}</InfoText>
    </StyledHelperInfo>
  );
}

export default CardHelperInfo;
