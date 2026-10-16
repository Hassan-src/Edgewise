import styled, { css } from "styled-components";

const Form = styled.form`
  overflow: hidden;
  font-size: var(--text-xl);
  padding: 0 var(--space-4);
  ${(props) =>
    props.$type === "regular" &&
    css`
      padding: var(--space-4) var(--space-5);
      border: 3px solid var(--color-border);
      border-radius: var(--radius-md);
    `}
  ${(props) =>
    props.$type === "modal" &&
    css`
      width: 80rem;
      height: 100%;
    `}
`;

export default Form;
