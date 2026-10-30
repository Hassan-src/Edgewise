import styled from "styled-components";

const StyledWarning = styled.div`
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--color-warning);
  background-color: var(--color-warning-light);
  border-radius: var(--radius-md);
  color: var(--color-text-warning);
`;

function Warning({ children }) {
  return <StyledWarning>{children}</StyledWarning>;
}

export default Warning;
