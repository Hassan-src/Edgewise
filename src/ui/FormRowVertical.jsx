import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-2) 0;
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-3);
  }
`;

const Label = styled.label`
  font-size: var(--text-xl);
  text-transform: capitalize;
`;
const Error = styled.span`
  font-size: var(--text-lg);
  color: var(--color-error-dark);
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}:</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
