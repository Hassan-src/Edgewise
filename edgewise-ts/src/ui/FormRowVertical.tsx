import type { ReactElement } from "react";
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

type FormRowVerticalProps = {
  label?: string;
  error?: string;
  children: ReactElement<{ id?: string }>;
  id?: string;
};

function FormRowVertical({ label, error, children }: FormRowVerticalProps) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}:</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
