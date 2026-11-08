import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-1);
  &:hover {
    background-color: var(--color-surface-muted);
  }
  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-accent);
  }
`;

export default ButtonIcon;
