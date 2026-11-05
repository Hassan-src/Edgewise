import styled from "styled-components";

const Head = styled.span`
  font-size: var(--text-xl);
  font-weight: 600;
  display: flex;
  gap: var(--space-2);
  align-items: center;
  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-on-accent-surface);
    background-color: var(--color-accent-surface);
    border-radius: var(--radius-sm);
    padding: var(--space-1);
  }
`;

export default Head;
