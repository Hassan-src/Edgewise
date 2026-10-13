import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 12rem 1fr 1.2fr;
  gap: var(--space-8);
  padding: var(--space-3) 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
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

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}:</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
