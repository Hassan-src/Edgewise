import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr) minmax(0, 0.5fr);
  grid-template-areas: "label input error";
  gap: var(--space-8);
  padding: var(--space-3) 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "label"
      "input"
      "error";
    gap: var(--space-3);
  }

  ${(props) =>
    props.$type === "action" &&
    css`
      display: flex;
      justify-content: flex-end;
      gap: var(--space-3);
    `}
`;

const Label = styled.label`
  grid-area: label;
  font-size: var(--text-xl);
  text-transform: capitalize;
`;
const Error = styled.span`
  grid-area: error;
  font-size: var(--text-lg);
  color: var(--color-error-dark);
`;

function FormRow({ label, error, children, id, $type }) {
  return (
    <StyledFormRow $type={$type}>
      {label && <Label htmlFor={id}>{label}:</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
